import { deriveNormalImageUrl } from './pokemon.js';

const DECOY_FILTERS = [
  {
    filterClass: 'guess-shiny-cell__img--warm',
    useShiny: true,
  },
  {
    filterClass: 'guess-shiny-cell__img--cool',
    useShiny: false,
  },
  {
    filterClass: 'guess-shiny-cell__img--faded',
    useShiny: true,
  },
  {
    filterClass: 'guess-shiny-cell__img--violet',
    useShiny: false,
  },
  {
    filterClass: 'guess-shiny-cell__img--golden',
    useShiny: true,
  },
  {
    filterClass: 'guess-shiny-cell__img--muted-green',
    useShiny: false,
  },
];

function shuffle(items) {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }

  return copy;
}

function pickRandomDecoys(count) {
  return shuffle(DECOY_FILTERS).slice(0, count);
}

export function buildShinyGridCells(shinyUrl, correctPosition) {
  const normalUrl = deriveNormalImageUrl(shinyUrl);
  const wrongPositions = [1, 2, 3, 4].filter((position) => position !== correctPosition);
  const shuffledWrong = shuffle(wrongPositions);
  const normalPosition = shuffledWrong[0];
  const decoyPositions = shuffledWrong.slice(1);
  const decoyFilters = pickRandomDecoys(decoyPositions.length);
  const cells = [];

  for (let position = 1; position <= 4; position += 1) {
    if (position === correctPosition) {
      cells.push({
        position,
        imageUrl: shinyUrl,
        filterClass: '',
        variant: 'shiny',
        isCorrect: true,
      });
      continue;
    }

    if (position === normalPosition) {
      cells.push({
        position,
        imageUrl: normalUrl,
        filterClass: '',
        variant: 'normal',
        isCorrect: false,
      });
      continue;
    }

    const decoyIndex = decoyPositions.indexOf(position);
    const decoy = decoyFilters[decoyIndex];

    cells.push({
      position,
      imageUrl: decoy.useShiny ? shinyUrl : normalUrl,
      filterClass: decoy.filterClass,
      variant: 'decoy',
      isCorrect: false,
    });
  }

  return cells;
}
