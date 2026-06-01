export const TRADE_GRID_COLUMNS_MIN = 2;
export const TRADE_GRID_COLUMNS_MAX = 6;
export const DEFAULT_TRADE_GRID_COLUMNS = 4;
export const TRADE_GRID_COLUMNS_STORAGE_KEY = 'pwg-trade-grid-columns';

export const TRADE_GRID_COLUMN_OPTIONS = [2, 3, 4, 5, 6];

function clampColumns(value) {
  const parsed = Number.parseInt(String(value), 10);

  if (!Number.isFinite(parsed)) {
    return DEFAULT_TRADE_GRID_COLUMNS;
  }

  return Math.min(TRADE_GRID_COLUMNS_MAX, Math.max(TRADE_GRID_COLUMNS_MIN, parsed));
}

export function readTradeGridColumns() {
  try {
    const stored = localStorage.getItem(TRADE_GRID_COLUMNS_STORAGE_KEY);
    return stored == null ? DEFAULT_TRADE_GRID_COLUMNS : clampColumns(stored);
  } catch {
    return DEFAULT_TRADE_GRID_COLUMNS;
  }
}

export function writeTradeGridColumns(columns) {
  try {
    localStorage.setItem(TRADE_GRID_COLUMNS_STORAGE_KEY, String(clampColumns(columns)));
  } catch {
    // ignore quota / private mode
  }
}
