import * as repository from './repository';

const MIN_QUERY_LENGTH = 2;
const MAX_RESULTS = 10;

export async function searchUsers(query: string) {
  try {
    const trimmed = query?.trim() ?? '';

    if (trimmed.length < MIN_QUERY_LENGTH) {
      return { users: [] };
    }

    const rows = await repository.searchUsersByName(trimmed, MAX_RESULTS);

    return {
      users: rows.map((row) => ({ name: row.name })),
    };
  } catch (error) {
    const errorMessage = {
      message: error instanceof Error ? error.message : String(error),
    };
    console.log(error);
    return { users: errorMessage };
  }
}
