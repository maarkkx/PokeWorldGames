import { getApiBase } from './config.js';

export class ApiError extends Error {
  constructor(message, status, data) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }
}

function resolveErrorMessage(response, data) {
  if (data.message) {
    return data.message;
  }

  if (response.status === 404) {
    return import.meta.env.DEV
      ? 'No se encontró el API. Comprueba que el backend esté en marcha (puerto 3000).'
      : 'No se encontró el API. Si el front está en otro dominio, define VITE_API_URL al hacer el build.';
  }

  return response.statusText;
}

//request generica para hacer peticiones
export async function api(path, { method = 'GET', body, token } = {}) {
  const base = getApiBase();
  const headers = { 'Content-Type': 'application/json' };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${base}${path}`, {
    method,
    headers,
    body: body != null ? JSON.stringify(body) : undefined,
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new ApiError(resolveErrorMessage(response, data), response.status, data);
  }

  return data;
}
