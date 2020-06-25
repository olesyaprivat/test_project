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
