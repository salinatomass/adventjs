// Reto: https://adventjs.dev/challenges/23

function canReconfigure(from, to) {
  if (from.length !== to.length) return false;

  const fromSet = new Set(from.split(''));
  const toSet = new Set(to.split(''));

  return fromSet.size === toSet.size;
}

// ______________________________________________________________________

const from = 'BAL';
const to = 'LIB';
canReconfigure(from, to); // true
/* la transformación sería así:
  B -> L
  A -> I
  L -> B
*/

canReconfigure('CON', 'JUU'); // false
/* no se puede hacer la transformación:
  C -> J
  O -> U
  N -> FALLO
*/
