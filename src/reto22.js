// Reto: https://adventjs.dev/challenges/22

const onlyValues = arr => arr.every(item => typeof item !== 'object');

function countDecorations(bigTree) {
  let bigTreeArr = Object.values(bigTree);

  while (!onlyValues(bigTreeArr)) {
    bigTreeArr = bigTreeArr.flatMap(item => {
      if (item === null) return 0;
      else if (typeof item === 'object') return Object.values(item);
      else return item;
    });
  }

  return bigTreeArr.reduce((accum, value) => accum + value, 0);
}

// ______________________________________________________________________

const tree = {
  value: 1, // el nodo raíz siempre es uno, porque es la estrella ⭐
  left: {
    value: 2, // el nodo izquierdo necesita dos decoraciones
    left: null, // no tiene más ramas
    right: null, // no tiene más ramas
  },
  right: {
    value: 3, // el nodo de la derecha necesita tres decoraciones
    left: null, // no tiene más ramas
    right: null, // no tiene más ramas
  },
};

countDecorations(tree); // 6 (1 + 2 + 3)
//     1
//   /   \
// 2     3
