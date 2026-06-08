import { KEYS } from '../i18n/keys.js';

const CONDITION_TYPE = {
  TYPE: 'type',
  GENERATION: 'generation',
  LEGENDARY: 'legendary',
  MYTH: 'myth',
};

export function isTypeCondition(condition) {
  return condition?.type === CONDITION_TYPE.TYPE;
}

export function getConditionLabelKey(condition) {
  if (!condition) {
    return null;
  }

  switch (condition.type) {
    case CONDITION_TYPE.GENERATION:
      return KEYS.pokedoku.conditionGeneration;
    case CONDITION_TYPE.LEGENDARY:
      return condition.value === 'true'
        ? KEYS.pokedoku.conditionLegendary
        : KEYS.pokedoku.conditionNotLegendary;
    case CONDITION_TYPE.MYTH:
      return condition.value === 'true'
        ? KEYS.pokedoku.conditionMyth
        : KEYS.pokedoku.conditionNotMyth;
    default:
      return null;
  }
}

export function getConditionLabelParams(condition) {
  if (condition?.type === CONDITION_TYPE.GENERATION) {
    return { generation: condition.value };
  }

  return undefined;
}

export function getConditionHeaderAttrs(condition) {
  if (!condition) {
    return {};
  }

  return {
    'data-condition-type': condition.type,
    'data-condition-value': condition.value,
  };
}
