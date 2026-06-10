import { regexUser } from '../constants/constants';
import * as repository from './repository';

//Limpiar caracteres que no sean numeros o letras
function sanitizeBase(value: string): string {
  return value.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}

//crear username a partir del email (para oauth)
function buildUsernameBase(email: string, displayName?: string | null): string {
  const localPart = email.split('@')[0] ?? 'user';
  let base = sanitizeBase(localPart);

  if (base.length < 4) {
    base = sanitizeBase(`${base}user`);
  }

  if (!regexUser.test(base) && displayName) {
    const fromName = sanitizeBase(displayName);
    if (fromName.length >= 4) {
      base = fromName;
    }
  }

  if (!regexUser.test(base)) {
    base = 'trainer';
  }

  if (base.length > 20) {
    base = base.slice(0, 20);
  }

  if (base.length < 4) {
    base = base.padEnd(4, '0');
  }

  return base.slice(0, 20);
}

//comprobar si el user esta repetido, en caso de que si añade un sufix hasta que no este repetido
export async function generateUniqueUsername(
  email: string,
  displayName?: string | null,
): Promise<string> {
  const base = buildUsernameBase(email, displayName);
  let candidate = base;
  let suffix = 1;

  while (await repository.usernameExists(candidate)) {
    const suffixText = String(suffix);
    const trimmedBase = base.slice(0, Math.max(4, 20 - suffixText.length));
    candidate = `${trimmedBase}${suffixText}`.slice(0, 20);
    suffix += 1;
  }

  return candidate;
}
