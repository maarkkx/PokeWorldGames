const STORAGE_KEY = 'pwg-guess-shiny-session';

export function saveShinySession(session) {
  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        v: 1,
        ...session,
      }),
    );
  } catch {
    // Ignore quota or privacy errors.
  }
}

export function loadShinySession() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw);
    if (parsed?.v !== 1 || !parsed.gameId || !parsed.imageUrl || !parsed.correctPosition) {
      return null;
    }

    if (!Array.isArray(parsed.cells) || parsed.cells.length !== 4) {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

export function clearShinySession() {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Ignore storage errors.
  }
}
