export function toNumber(value) {
  const float = parseFloat(value);
  return isNaN(float) ? 0 : float;
}
