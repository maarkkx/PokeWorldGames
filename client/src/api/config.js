/**
 * Base URL del API (sin barra final).
 * - Dev: /api → proxy de Vite hacia el backend.
 * - Prod mismo origen: vacío (peticiones relativas al servidor que sirve front + API).
 * - Prod separado: VITE_API_URL en el build (p. ej. https://api.tudominio.com).
 */
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
