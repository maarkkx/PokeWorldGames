import prisma from '../../../../prisma/client';
import { PokemonTradeInput } from '../constants/types';

//buscar usuario por su user
export async function findUserByName(name : string) {
  return prisma.user.findFirst({
    where: { name },
    select: {
      id: true,
      name: true,
    },
  });
}

//get de la cantidad que tiene de un pokemon especifico
export async function getUserPokemonQuantity(userId: number, pokemonId: number) {
  return prisma.userPokemon.findUnique({
    where: {
      userId_pokemonId: {
        userId,
        pokemonId,
      },
    },
    select: {
      quantity: true,
    },
  });
}

//crear el trade
export async function createTrade(fromUserId: number, toUserId: number, offeredPokemons: PokemonTradeInput[], requestedPokemons: PokemonTradeInput[]) {
  return prisma.trade.create({
    data: {
      fromUserId,
      toUserId,
      items: {
        create: [
          ...offeredPokemons.map((item) => ({
            ownerUserId: fromUserId,
            pokemonId: item.pokemonId,
            quantity: item.quantity,
          })),
          ...requestedPokemons.map((item) => ({
            ownerUserId: toUserId,
            pokemonId: item.pokemonId,
            quantity: item.quantity,
          })),
        ],
      },
    },
    include: {
      fromUser: {
        select: {
          id: true,
          name: true,
        },
      },
      toUser: {
        select: {
          id: true,
          name: true,
        },
      },
      items: {
        select: {
          id: true,
          ownerUserId: true,
          quantity: true,
          pokemon: {
            select: {
              id: true,
              name: true,
              urlImage: true,
            },
          },
        },
      },
    },
  });
}