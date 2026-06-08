import * as repository from './repository';
import { formatRankingEntry, type RankingUserRow } from './format';

function mapRankingEntries(entries: Array<Partial<RankingUserRow>>) {
  return entries
    .map((entry) => formatRankingEntry(entry))
    .filter((entry): entry is NonNullable<ReturnType<typeof formatRankingEntry>> => entry != null);
}

export async function getAllRankings() {
  try {
    const level = await repository.top10LvlPlayers();

    if (!level) {
      throw new Error('Error getting rankings');
    }

    const numberPokemons = await repository.getTop10UsersByTotalPokemons();

    if (!numberPokemons) {
      throw new Error('Error getting rankings');
    }

    const uniquePokemons = await repository.getTop10UsersByUniquePokemons();

    if (!uniquePokemons) {
      throw new Error('Error getting rankings')
    }

    return {
      level: mapRankingEntries(level),
      numberPokemons: mapRankingEntries(numberPokemons),
      uniquePokemons: mapRankingEntries(uniquePokemons),
    }

  } catch (error) {
    const errorMessage = {
      message: error instanceof Error ? error.message : error
    }
    console.log(error)
    return errorMessage
  }
}