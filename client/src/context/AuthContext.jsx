import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { login as loginRequest, loginWithGoogleIdToken } from '../api/auth.js';
import { fetchProfile } from '../api/profile.js';
import { getFirebaseAuthBundle, isFirebaseConfigured } from '../config/firebase.js';
import { isGooglePopupCancelled } from '../utils/authErrors.js';
import { clearStorage, readStorage, writeStorage } from '../utils/storage.js';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => readStorage());
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(Boolean(readStorage()));

  const loadProfile = useCallback(async (activeToken) => {
    const profile = await fetchProfile(activeToken);
    setUser(profile);
    return profile;
  }, []);

  useEffect(() => {
    if (!token) {
      setLoading(false);
      return;
    }

    let cancelled = false;

    loadProfile(token)
      .catch(() => {
        if (!cancelled) {
          clearStorage();
          setToken(null);
          setUser(null);
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

    const { auth, googleProvider, signInWithPopup } = await getFirebaseAuthBundle();
    const credential = await signInWithPopup(auth, googleProvider);
    const idToken = await credential.user.getIdToken();
    const nextToken = await loginWithGoogleIdToken(idToken);
    writeStorage(nextToken);
    setToken(nextToken);
    setLoading(true);
    const profile = await loadProfile(nextToken);
    setLoading(false);
    return profile;
  }, [loadProfile]);

  const logout = useCallback(async () => {
    if (isFirebaseConfigured()) {
      try {
        const { auth, signOut } = await getFirebaseAuthBundle();
        await signOut(auth);
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
    }),
    [token, user, loading, login, loginWithGoogle, logout, refreshProfile],
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

export { isGooglePopupCancelled };
