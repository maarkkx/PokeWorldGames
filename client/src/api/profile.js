import { api } from './client.js';

//request para los detalles del perfil
export async function fetchProfile(token) {
  const data = await api('/profile/show', {
    method: 'POST',
    body: {},
    token,
  });

  if (data.result?.message) {
    throw new Error(data.result.message);
  }

  return data.result;
}
