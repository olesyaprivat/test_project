import { flow } from 'lodash';

export const emptyObject = () => Object.create(null);

export const array = (length = 0) => Array.from({ length });

export const emptyArray = array;

export const fillArray = predicate => array => array.map(predicate);

export const emptyString = () => '';

export const arrayOfEmptyObject = () => flow([array, fillArray(emptyObject)]);

export const prop = (type, _default = (type[0] || type)(), validator) => ({
  type,
  default: _default,
  validator,
});
export const propRequired = (type, validator) => ({
  type,
  validator,
  required: true,
});
