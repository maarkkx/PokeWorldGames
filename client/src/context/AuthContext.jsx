import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { login as loginRequest } from '../api/auth.js';
import { fetchProfile } from '../api/profile.js';
import { clearStorage, readStorage, writeStorage } from '../utils/storage.js';

//context para compartir datos con los componentes
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

  //Comprobar que la sesion es valida
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

  const logout = useCallback(() => {
    clearStorage();
    setToken(null);
    setUser(null);
    setLoading(false);
  }, []);

  //objeto de user
  const value = useMemo(
    () => ({
      token,
      user,
      loading,
      isAuthenticated: Boolean(token),
      login,
      logout,
      refreshProfile: () => (token ? loadProfile(token) : Promise.resolve(null)),
    }),
    [token, user, loading, login, logout, loadProfile],
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
