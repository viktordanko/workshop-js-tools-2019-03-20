/**
 * Adds two numbers. Or strings, but don't use it.
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
export function add (a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Numbers, motherfucker!')
  }
  return a + b
}
