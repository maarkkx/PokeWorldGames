import * as repository from './repository';
import { PokemonTradeInput } from '../constants/types';
import { CreateTradeInput } from '../constants/types';

//crear la array de pokemons para el trade
function normalizeItems(items: PokemonTradeInput[]) {
  const grouped = new Map<number, number>();

  for (const item of items) {
    //check antes de hacer el map
    if (!item.pokemonId || !item.quantity) {
      throw new Error('Each pokemon must include pokemonId and quantity');
    }

    if (item.quantity <= 0) {
      throw new Error('Pokemon quantity must be greater than 0');
    }

    grouped.set(
      item.pokemonId,
      (grouped.get(item.pokemonId) ?? 0) + item.quantity
    );
  }

  return Array.from(grouped.entries()).map(([pokemonId, quantity]) => ({
    pokemonId,
    quantity,
  }));
}

export async function createTrade(data: CreateTradeInput) {
  const { fromUserId, toUserName } = data;

  if (!fromUserId) {
    throw new Error('The user ID is required');
  }

  if (!toUserName) {
    throw new Error('The target user is required');
  }

  //ajustar los datos para el tradeo
  const offeredPokemons = normalizeItems(data.offeredPokemons ?? []);
  const requestedPokemons = normalizeItems(data.requestedPokemons ?? []);

  if (offeredPokemons.length === 0) {
    throw new Error('You must offer at least one Pokémon');
  }

  if (requestedPokemons.length === 0) {
    throw new Error('You must request at least one Pokémon');
  }

  const toUser = await repository.findUserByName(toUserName);

  if (!toUser) {
    throw new Error('Target user does not exist');
  }

  if (toUser.id === fromUserId) {
    throw new Error('You cannot create a trade with yourself');
  }

  //comprobar si tiene la cantidad de pokemons indicada
  for (const item of offeredPokemons) {
    const inventory = await repository.getUserPokemonQuantity(fromUserId, item.pokemonId);

    if (!inventory || inventory.quantity < item.quantity) {
      throw new Error(`You do not have enough units of Pokémon ${item.pokemonId}`);
    }
  }

  //comprobar si el otro usuario tiene la cantidad de pokemons requerida
  for (const item of requestedPokemons) {
    const inventory = await repository.getUserPokemonQuantity(toUser.id, item.pokemonId);

    if (!inventory || inventory.quantity < item.quantity) {
      throw new Error(`The other user does not have enough units of Pokémon ${item.pokemonId}`);
    }
  }

  return repository.createTrade(
    fromUserId,
    toUser.id,
    offeredPokemons,
    requestedPokemons
  );
}