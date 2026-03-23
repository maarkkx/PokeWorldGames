import "dotenv/config";
import prisma from "./client";

const POKEAPI_BASE = "https://pokeapi.co/api/v2";
const BATCH_SIZE = Number(process.env.SEED_BATCH_SIZE ?? 10);

type NamedApiResource = {
  name: string;
  url: string;
};

type PokemonSpeciesListResponse = {
  count: number;
  results: NamedApiResource[];
};

type PokemonResponse = {
  id: number;
  name: string;
  types: Array<{
    slot: number;
    type: NamedApiResource;
  }>;
  stats: Array<{
    base_stat: number;
    stat: NamedApiResource;
  }>;
  sprites: {
    front_default: string | null;
    front_shiny: string | null;
    other?: {
      ["official-artwork"]?: {
        front_default: string | null;
        front_shiny: string | null;
      };
      home?: {
        front_default: string | null;
        front_shiny: string | null;
      };
    };
  };
};

type PokemonSpeciesResponse = {
  name: string;
  generation: NamedApiResource;
  is_legendary: boolean;
  is_mythical: boolean;
  evolution_chain: {
    url: string;
  };
  varieties: Array<{
    is_default: boolean;
    pokemon: NamedApiResource;
  }>;
};

type EvolutionDetail = {
  trigger: NamedApiResource;
  min_level: number | null;
  item: NamedApiResource | null;
  held_item: NamedApiResource | null;
  known_move: NamedApiResource | null;
  known_move_type: NamedApiResource | null;
  location: NamedApiResource | null;
  min_happiness: number | null;
  min_beauty: number | null;
  min_affection: number | null;
  needs_overworld_rain: boolean;
  party_species: NamedApiResource | null;
  party_type: NamedApiResource | null;
  relative_physical_stats: number | null;
  time_of_day: string;
  trade_species: NamedApiResource | null;
  turn_upside_down: boolean;
};

type EvolutionChainNode = {
  species: NamedApiResource;
  evolves_to: EvolutionChainNode[];
  evolution_details: EvolutionDetail[];
};

type EvolutionChainResponse = {
  id: number;
  chain: EvolutionChainNode;
};

type NormalizedPokemon = {
  id: number;
  speciesName: string;
  name: string;
  generation: number;
  urlImage: string | null;
  urlShinyImage: string | null;
  legendary: boolean;
  myth: boolean;
  hp: number;
  atk: number;
  def: number;
  spAtk: number;
  spDef: number;
  speed: number;
  typeNames: string[];
  evolutionChainId: number;
};

type EvolutionEdge = {
  evolutionChainId: number;
  fromPokemonId: number;
  toPokemonId: number;
  method: string | null;
  condition: string | null;
};

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Error ${response.status} al pedir ${url}`);
  }

  return (await response.json()) as T;
}

function parseIdFromUrl(url: string): number {
  const match = url.match(/\/(\d+)\/?$/);

  if (!match) {
    throw new Error(`No se pudo extraer un id de la URL: ${url}`);
  }

  return Number(match[1]);
}

function getStat(stats: PokemonResponse["stats"], statName: string): number {
  const stat = stats.find((s) => s.stat.name === statName);
  return stat?.base_stat ?? 0;
}

function getBestImage(pokemon: PokemonResponse): string | null {
  return (
    pokemon.sprites.other?.["official-artwork"]?.front_default ??
    pokemon.sprites.other?.home?.front_default ??
    pokemon.sprites.front_default ??
    null
  );
}

function getBestShinyImage(pokemon: PokemonResponse): string | null {
  return (
    pokemon.sprites.other?.["official-artwork"]?.front_shiny ??
    pokemon.sprites.other?.home?.front_shiny ??
    pokemon.sprites.front_shiny ??
    null
  );
}

function buildEvolutionCondition(detail?: EvolutionDetail): string | null {
  if (!detail) return null;

  const parts: string[] = [];

  if (detail.min_level) parts.push(`level ${detail.min_level}`);
  if (detail.item) parts.push(`item ${detail.item.name}`);
  if (detail.held_item) parts.push(`hold ${detail.held_item.name}`);
  if (detail.known_move) parts.push(`know move ${detail.known_move.name}`);
  if (detail.known_move_type) parts.push(`know ${detail.known_move_type.name} move`);
  if (detail.location) parts.push(`location ${detail.location.name}`);
  if (detail.min_happiness) parts.push(`happiness ${detail.min_happiness}`);
  if (detail.min_beauty) parts.push(`beauty ${detail.min_beauty}`);
  if (detail.min_affection) parts.push(`affection ${detail.min_affection}`);
  if (detail.needs_overworld_rain) parts.push("rain");
  if (detail.party_species) parts.push(`party species ${detail.party_species.name}`);
  if (detail.party_type) parts.push(`party type ${detail.party_type.name}`);
  if (detail.relative_physical_stats !== null) {
    if (detail.relative_physical_stats === 1) parts.push("atk > def");
    if (detail.relative_physical_stats === 0) parts.push("atk = def");
    if (detail.relative_physical_stats === -1) parts.push("atk < def");
  }
  if (detail.time_of_day) parts.push(`time ${detail.time_of_day}`);
  if (detail.trade_species) parts.push(`trade for ${detail.trade_species.name}`);
  if (detail.turn_upside_down) parts.push("turn upside down");

  return parts.length > 0 ? parts.join(" | ") : null;
}

function extractEvolutionEdges(
  chainId: number,
  node: EvolutionChainNode,
  speciesNameToPokemonId: Map<string, number>,
): EvolutionEdge[] {
  const edges: EvolutionEdge[] = [];
  const fromPokemonId = speciesNameToPokemonId.get(node.species.name);

  for (const child of node.evolves_to) {
    const toPokemonId = speciesNameToPokemonId.get(child.species.name);

    if (fromPokemonId && toPokemonId) {
      const detail = child.evolution_details?.[0];

      edges.push({
        evolutionChainId: chainId,
        fromPokemonId,
        toPokemonId,
        method: detail?.trigger?.name ?? null,
        condition: buildEvolutionCondition(detail),
      });
    }

    edges.push(...extractEvolutionEdges(chainId, child, speciesNameToPokemonId));
  }

  return edges;
}

async function getAllSpecies(): Promise<NamedApiResource[]> {
  const firstPage = await fetchJson<PokemonSpeciesListResponse>(
    `${POKEAPI_BASE}/pokemon-species?limit=1`,
  );

  const fullPage = await fetchJson<PokemonSpeciesListResponse>(
    `${POKEAPI_BASE}/pokemon-species?limit=${firstPage.count}`,
  );

  return fullPage.results;
}

async function normalizeSpecies(speciesResource: NamedApiResource): Promise<NormalizedPokemon | null> {
  const species = await fetchJson<PokemonSpeciesResponse>(speciesResource.url);

  const defaultVariety = species.varieties.find((v) => v.is_default);

  if (!defaultVariety) {
    console.warn(`Sin variedad por defecto para ${species.name}, se omite`);
    return null;
  }

  const pokemon = await fetchJson<PokemonResponse>(defaultVariety.pokemon.url);

  return {
    id: pokemon.id,
    speciesName: species.name,
    name: pokemon.name,
    generation: parseIdFromUrl(species.generation.url),
    urlImage: getBestImage(pokemon),
    urlShinyImage: getBestShinyImage(pokemon),
    legendary: species.is_legendary,
    myth: species.is_mythical,
    hp: getStat(pokemon.stats, "hp"),
    atk: getStat(pokemon.stats, "attack"),
    def: getStat(pokemon.stats, "defense"),
    spAtk: getStat(pokemon.stats, "special-attack"),
    spDef: getStat(pokemon.stats, "special-defense"),
    speed: getStat(pokemon.stats, "speed"),
    typeNames: pokemon.types
      .sort((a, b) => a.slot - b.slot)
      .map((t) => t.type.name),
    evolutionChainId: parseIdFromUrl(species.evolution_chain.url),
  };
}

async function processInBatches<T, R>(
  items: T[],
  worker: (item: T) => Promise<R>,
  batchSize: number,
): Promise<R[]> {
  const results: R[] = [];

  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    const batchResults = await Promise.all(batch.map(worker));
    results.push(...batchResults);
    console.log(`Procesados ${Math.min(i + batch.length, items.length)} / ${items.length}`);
  }

  return results;
}

async function upsertPokemons(pokemons: NormalizedPokemon[]) {
  for (const pokemon of pokemons) {
    await prisma.pokemon.upsert({
      where: { id: pokemon.id },
      update: {
        name: pokemon.name,
        generation: pokemon.generation,
        urlImage: pokemon.urlImage,
        urlShinyImage: pokemon.urlShinyImage,
        legendary: pokemon.legendary,
        myth: pokemon.myth,
        hp: pokemon.hp,
        atk: pokemon.atk,
        def: pokemon.def,
        spAtk: pokemon.spAtk,
        spDef: pokemon.spDef,
        speed: pokemon.speed,
      },
      create: {
        id: pokemon.id,
        name: pokemon.name,
        generation: pokemon.generation,
        urlImage: pokemon.urlImage,
        urlShinyImage: pokemon.urlShinyImage,
        legendary: pokemon.legendary,
        myth: pokemon.myth,
        hp: pokemon.hp,
        atk: pokemon.atk,
        def: pokemon.def,
        spAtk: pokemon.spAtk,
        spDef: pokemon.spDef,
        speed: pokemon.speed,
      },
    });
  }
}

async function upsertTypes(typeNames: string[]) {
  for (const name of typeNames) {
    await prisma.type.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }
}

async function replacePokemonTypes(pokemons: NormalizedPokemon[]) {
  const uniqueTypeNames = [...new Set(pokemons.flatMap((p) => p.typeNames))];

  await upsertTypes(uniqueTypeNames);

  const types = await prisma.type.findMany({
    where: {
      name: {
        in: uniqueTypeNames,
      },
    },
  });

  const typeIdByName = new Map(types.map((type) => [type.name, type.id]));

  const relationRows = pokemons.flatMap((pokemon) =>
    pokemon.typeNames.map((typeName) => ({
      pokemonId: pokemon.id,
      typeId: typeIdByName.get(typeName)!,
    })),
  );

  await prisma.pokemonType.deleteMany();

  for (let i = 0; i < relationRows.length; i += 500) {
    const chunk = relationRows.slice(i, i + 500);

    await prisma.pokemonType.createMany({
      data: chunk,
      skipDuplicates: true,
    });
  }
}

async function replaceEvolutionChains(speciesNameToPokemonId: Map<string, number>, chainIds: number[]) {
  const uniqueChainIds = [...new Set(chainIds)];
  const allEdges: EvolutionEdge[] = [];

  for (const chainId of uniqueChainIds) {
    const chain = await fetchJson<EvolutionChainResponse>(
      `${POKEAPI_BASE}/evolution-chain/${chainId}`,
    );

    const edges = extractEvolutionEdges(chain.id, chain.chain, speciesNameToPokemonId);
    allEdges.push(...edges);
  }

  await prisma.evolutiveChain.deleteMany();

  for (let i = 0; i < allEdges.length; i += 500) {
    const chunk = allEdges.slice(i, i + 500);

    await prisma.evolutiveChain.createMany({
      data: chunk,
      skipDuplicates: true,
    });
  }
}

async function syncPokemonIdSequence() {
  await prisma.$executeRawUnsafe(`
    SELECT setval(
      pg_get_serial_sequence('pokemon', 'id'),
      COALESCE((SELECT MAX(id) FROM pokemon), 1),
      true
    );
  `);
}

async function main() {
  console.log("Obteniendo especies desde PokéAPI...");
  const species = await getAllSpecies();

  console.log(`Se han encontrado ${species.length} especies`);
  console.log("Normalizando datos...");

  const normalized = await processInBatches(
    species,
    async (speciesResource) => {
      try {
        return await normalizeSpecies(speciesResource);
      } catch (error) {
        console.error(`Error procesando ${speciesResource.name}:`, error);
        return null;
      }
    },
    BATCH_SIZE,
  );

  const pokemons = normalized.filter((p): p is NormalizedPokemon => p !== null);

  console.log(`Pokémon válidos normalizados: ${pokemons.length}`);
  console.log("Insertando/actualizando Pokémon...");

  await upsertPokemons(pokemons);

  console.log("Insertando/actualizando tipos y relaciones...");
  await replacePokemonTypes(pokemons);

  const speciesNameToPokemonId = new Map(
    pokemons.map((pokemon) => [pokemon.speciesName, pokemon.id]),
  );

  console.log("Insertando/actualizando cadenas evolutivas...");
  await replaceEvolutionChains(
    speciesNameToPokemonId,
    pokemons.map((pokemon) => pokemon.evolutionChainId),
  );

  console.log("Sincronizando secuencia del id de Pokémon...");
  await syncPokemonIdSequence();

  console.log("Seed completado correctamente ✅");
}

main()
  .catch((error) => {
    console.error("Seed falló ❌", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });