import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { login as loginRequest, loginWithGoogleIdToken } from '../api/auth.js';
import { fetchProfile } from '../api/profile.js';
import {
  getFirebaseAuthBundle,
  isFirebaseConfigured,
  prefetchFirebaseAuth,
  resetGoogleRedirectState,
  resolveGoogleRedirectResult,
} from '../config/firebase.js';
import { isGoogleSignInCancelled } from '../utils/authErrors.js';
import { clearStorage, readStorage, writeStorage } from '../utils/storage.js';

const AuthContext = createContext(null);

function waitForFirebaseUser(auth, onAuthStateChanged, timeoutMs = 5000) {
  if (auth.currentUser) {
    return Promise.resolve(auth.currentUser);
  }

  return new Promise((resolve) => {
    let settled = false;

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user || settled) {
        return;
      }

      settled = true;
      unsubscribe();
      resolve(user);
    });

    window.setTimeout(() => {
      if (settled) {
        return;
      }

      settled = true;
      unsubscribe();
      resolve(auth.currentUser);
    }, timeoutMs);
  });
}

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => readStorage());
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(() => {
    if (readStorage()) {
      return true;
    }

    return isFirebaseConfigured();
  });
  const [googleRedirectError, setGoogleRedirectError] = useState('');
  const googleExchangeRef = useRef(false);

  const loadProfile = useCallback(async (activeToken) => {
    const profile = await fetchProfile(activeToken);
    setUser(profile);
    return profile;
  }, []);

  const exchangeFirebaseUser = useCallback(async (firebaseUser) => {
    if (googleExchangeRef.current || readStorage()) {
      return false;
    }

    googleExchangeRef.current = true;

    try {
      setLoading(true);
      setGoogleRedirectError('');
      const idToken = await firebaseUser.getIdToken();
      const nextToken = await loginWithGoogleIdToken(idToken);
      writeStorage(nextToken);
      setToken(nextToken);
      return true;
    } catch (error) {
      googleExchangeRef.current = false;

      if (!isGoogleSignInCancelled(error)) {
        setGoogleRedirectError(error instanceof Error ? error : new Error(String(error)));
      }

      return false;
    }
  }, []);

  useEffect(() => {
    prefetchFirebaseAuth();
  }, []);

  useEffect(() => {
    if (!isFirebaseConfigured() || readStorage()) {
      return undefined;
    }

    let cancelled = false;

    async function completeGoogleRedirect() {
      setLoading(true);

      try {
        const { auth, onAuthStateChanged: watchAuthState } = getFirebaseAuthBundle();
        const redirectResult = await resolveGoogleRedirectResult(auth);

        if (cancelled || readStorage()) {
          return;
        }

        if (redirectResult?.user) {
          await exchangeFirebaseUser(redirectResult.user);
          return;
        }

        const firebaseUser = await waitForFirebaseUser(auth, watchAuthState);
        if (cancelled || readStorage() || !firebaseUser) {
          return;
        }

        await exchangeFirebaseUser(firebaseUser);
      } catch (error) {
        if (!cancelled && !isGoogleSignInCancelled(error)) {
          setGoogleRedirectError(error instanceof Error ? error : new Error(String(error)));
        }
      } finally {
        if (!cancelled && !readStorage()) {
          setLoading(false);
        }
      }
    }

    completeGoogleRedirect();

    return () => {
      cancelled = true;
    };
  }, [exchangeFirebaseUser]);

  useEffect(() => {
    if (!token) {
      if (!isFirebaseConfigured()) {
        setLoading(false);
      }

      return undefined;
    }

    let cancelled = false;

    loadProfile(token)
      .catch(() => {
        if (!cancelled) {
          clearStorage();
          setToken(null);
          setUser(null);
          googleExchangeRef.current = false;
        }
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [token, loadProfile]);

  const login = useCallback(async (email, password) => {
    const nextToken = await loginRequest(email, password);
    writeStorage(nextToken);
    setToken(nextToken);
    setLoading(true);
    const profile = await loadProfile(nextToken);
    setLoading(false);
    return profile;
  }, [loadProfile]);

  const loginWithGoogle = useCallback(async () => {
    if (!isFirebaseConfigured()) {
      throw new Error('Firebase is not configured');
    }

    setGoogleRedirectError('');
    googleExchangeRef.current = false;
    resetGoogleRedirectState();

    const {
      auth,
      googleProvider,
      signInWithRedirect: startGoogleRedirect,
      setPersistence,
      browserLocalPersistence,
    } = getFirebaseAuthBundle();

    await setPersistence(auth, browserLocalPersistence);
    await startGoogleRedirect(auth, googleProvider);
  }, []);

  const logout = useCallback(async () => {
    googleExchangeRef.current = false;
    resetGoogleRedirectState();

    if (isFirebaseConfigured()) {
      try {
        const { auth, signOut: firebaseSignOut } = getFirebaseAuthBundle();
        await firebaseSignOut(auth);
      } catch {
        // Ignore Firebase logout errors; local session must still clear.
      }
    }

    clearStorage();
    setToken(null);
    setUser(null);
    setLoading(false);
  }, []);

  const refreshProfile = useCallback(() => {
    if (!token) {
      return Promise.resolve(null);
    }

    return loadProfile(token);
  }, [token, loadProfile]);

  const clearGoogleRedirectError = useCallback(() => {
    setGoogleRedirectError('');
  }, []);

  const value = useMemo(
    () => ({
      token,
      user,
      loading,
      isAuthenticated: Boolean(token),
      login,
      loginWithGoogle,
      logout,
      refreshProfile,
      isGoogleSignInAvailable: isFirebaseConfigured(),
      googleRedirectError,
      clearGoogleRedirectError,
    }),
    [
      token,
      user,
      loading,
      login,
      loginWithGoogle,
      logout,
      refreshProfile,
      googleRedirectError,
      clearGoogleRedirectError,
    ],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }

  return context;
}

export { isGoogleSignInCancelled as isGooglePopupCancelled } from '../utils/authErrors.js';
