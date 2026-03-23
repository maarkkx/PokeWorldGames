import prisma from '../../../../prisma/client';

export const getRandomPokemon = async () => {
  const total = await prisma.pokemon.count(); //contar todos los pokemons de la bd

  const randomIndex = Math.floor(Math.random() * total); //escoger un pokemon aleatorio

  const pokemon = await prisma.pokemon.findMany({
    skip: randomIndex,
    take: 1,
    select: {
      id: true,
      name: true,
      urlImage: true,
      hp: true,
      atk: true,
      def: true,
      spAtk: true,
      spDef: true,
      speed: true,
      types: { 
        select: {
          type: { 
            select: { name: true }
          }
        }
      }
    }
  });

  return pokemon[0];
};