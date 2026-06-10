//ubicacion api
export function getApiBase() {
  const fromEnv = import.meta.env.VITE_API_URL?.trim();
  if (fromEnv) {
    return fromEnv.replace(/\/$/, '');
  }

  if (import.meta.env.DEV) {
    return '/api';
  }

  return '';
}
