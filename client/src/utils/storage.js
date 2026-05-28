const STORAGE_KEY = 'pwg-auth';

function readStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw);
    if (parsed?.v !== 1 || !parsed.token) return null;

    return parsed.token;
  } catch {
    return null;
  }
}

function writeStorage(token) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ v: 1, token }));
}

function clearStorage() {
  localStorage.removeItem(STORAGE_KEY);
}

export { readStorage, writeStorage, clearStorage };
