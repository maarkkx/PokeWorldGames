import prisma from '../../../../prisma/client';
import { Prisma } from '../../../../generated/prisma';

export async function acceptTrade(tradeId: string, userId: number) {
  //transaccion para que se ejecute todo
  return prisma.$transaction(
    async (tx) => {
      //buscar el trade con el tradeId
      const trade = await tx.trade.findUnique({
        where: { tradeId },
        include: {
          items: {
            include: {
              pokemon: {
                select: {
                  id: true,
                  name: true,
                  urlImage: true,
                },
              },
            },
          },
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
        },
      });

      //comprobaciones
      if (!trade) {
        throw new Error('Trade not found');
      }

      if (trade.toUserId !== userId) {
        throw new Error('You cannot accept this trade');
      }

      if (trade.status !== 'PENDING') {
        throw new Error('Trade is no longer pending');
      }

      //otra comprobacion de que cada persona tiene los pokemons en el inventario
      for (const item of trade.items) {
        const inventory = await tx.userPokemon.findUnique({
          where: {
            userId_pokemonId: {
              userId: item.ownerUserId,
              pokemonId: item.pokemonId,
            },
          },
          select: {
            quantity: true,
          },
        });

        if (!inventory || inventory.quantity < item.quantity) {
          throw new Error(
            `User ${item.ownerUserId} does not have enough units of Pokémon ${item.pokemonId}`
          );
        }
      }

      const fromItems = trade.items.filter(
        (item) => item.ownerUserId === trade.fromUserId
      );

      const toItems = trade.items.filter(
        (item) => item.ownerUserId === trade.toUserId
      );

      //resta los pokemons al creador del trade
      for (const item of fromItems) {
        const updatedFrom = await tx.userPokemon.update({
          where: {
            userId_pokemonId: {
              userId: trade.fromUserId,
              pokemonId: item.pokemonId,
            },
          },
          data: {
            quantity: {
              decrement: item.quantity,
            },
          },
          select: {
            userId: true,
            pokemonId: true,
            quantity: true,
          },
        });

        //borrar la fila si no queda cantidad
        if (updatedFrom.quantity === 0) {
          await tx.userPokemon.delete({
            where: {
              userId_pokemonId: {
                userId: updatedFrom.userId,
                pokemonId: updatedFrom.pokemonId,
              },
            },
          });
        }

        //sumar los pokemons al receptor
        await tx.userPokemon.upsert({
          where: {
            userId_pokemonId: {
              userId: trade.toUserId,
              pokemonId: item.pokemonId,
            },
          },
          create: {
            userId: trade.toUserId,
            pokemonId: item.pokemonId,
            quantity: item.quantity,
          },
          update: {
            quantity: {
              increment: item.quantity,
            },
          },
        });
      }

      //restar los pokemons del receptor del trade
      for (const item of toItems) {
        const updatedTo = await tx.userPokemon.update({
          where: {
            userId_pokemonId: {
              userId: trade.toUserId,
              pokemonId: item.pokemonId,
            },
          },
          data: {
            quantity: {
              decrement: item.quantity,
            },
          },
          select: {
            userId: true,
            pokemonId: true,
            quantity: true,
          },
        });

        //borrar la fila si se queda a 0
        if (updatedTo.quantity === 0) {
          await tx.userPokemon.delete({
            where: {
              userId_pokemonId: {
                userId: updatedTo.userId,
                pokemonId: updatedTo.pokemonId,
              },
            },
          });
        }

        //sumarle los pokemons al creador del trade
        await tx.userPokemon.upsert({
          where: {
            userId_pokemonId: {
              userId: trade.fromUserId,
              pokemonId: item.pokemonId,
            },
          },
          create: {
            userId: trade.fromUserId,
            pokemonId: item.pokemonId,
            quantity: item.quantity,
          },
          update: {
            quantity: {
              increment: item.quantity,
            },
          },
        });
      }

      //cambiar el estado a aceptado para que no se pueda aceptar mas veces
      const updatedTrade = await tx.trade.update({
        where: { id: trade.id },
        data: {
          status: 'ACCEPTED',
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

      return updatedTrade;
    },
    {
      isolationLevel: Prisma.TransactionIsolationLevel.Serializable,
    }
  );
}