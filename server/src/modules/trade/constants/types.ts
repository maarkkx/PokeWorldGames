export type PokemonTradeInput = {
  pokemonId: number;
  quantity: number;
};

export type CreateTradeInput = {
  fromUserId: number;
  toUserName: string;
  offeredPokemons: PokemonTradeInput[];
  requestedPokemons: PokemonTradeInput[];
};