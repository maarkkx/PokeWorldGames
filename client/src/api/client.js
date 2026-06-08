import { getApiBase } from './config.js';

const REQUEST_TIMEOUT_MS = 30_000;

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

function createTimeoutSignal(timeoutMs) {
  if (typeof AbortSignal !== 'undefined' && typeof AbortSignal.timeout === 'function') {
    return AbortSignal.timeout(timeoutMs);
  }

  const controller = new AbortController();
  window.setTimeout(() => controller.abort(), timeoutMs);
  return controller.signal;
}

//request generica para hacer peticiones
export async function api(path, { method = 'GET', body, token } = {}) {
  const base = getApiBase();

  if (!base && !import.meta.env.DEV) {
    throw new ApiError(
      'No se encontró el API. Define VITE_API_URL al hacer el build.',
      0,
      {},
    );
  }

  const headers = { 'Content-Type': 'application/json' };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  let response;

  try {
    response = await fetch(`${base}${path}`, {
      method,
      headers,
      body: body != null ? JSON.stringify(body) : undefined,
      signal: createTimeoutSignal(REQUEST_TIMEOUT_MS),
    });
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      throw new ApiError(
        'El servidor tardó demasiado en responder. Inténtalo de nuevo en unos segundos.',
        0,
        {},
      );
    }

    throw error;
  }

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new ApiError(resolveErrorMessage(response, data), response.status, data);
  }

  return data;
}
