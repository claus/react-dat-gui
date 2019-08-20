/* eslint-disable no-restricted-globals */
export function toNumber(value) {
  const float = parseFloat(value);
  return isNaN(float) ? 0 : float;
}

/**
 * Polyfill for isInteger.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger#Polyfill
 * @param {number} value
 * @return {bool}
 */
export const isInteger =
  Number.isInteger ||
  // eslint-disable-next-line func-names
  function(value) {
    return (
      typeof value === 'number' &&
      isFinite(value) &&
      Math.floor(value) === value
    );
  };
