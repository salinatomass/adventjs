// Reto: https://adventjs.dev/challenges/14

function missingReindeer(ids) {
  if (!ids.includes(0)) return 0;

  const sortedIds = ids.sort((a, b) => a - b);

  for (let i in sortedIds) {
    const current = sortedIds[i];
    const previous = sortedIds[i - 1];
    const result = current - previous || 1;
    // en caso de que el resultado sea NaN retorna 1

    if (result !== 1) return current - 1;
  }

  return sortedIds.pop() + 1;
}

// ______________________________________________________________________

missingReindeer([0, 2, 3]); // -> 1
missingReindeer([5, 6, 1, 2, 3, 7, 0]); // -> 4
missingReindeer([0, 1]); // -> 2 (¡es el último el que falta!)
missingReindeer([3, 0, 1]); // -> 2
missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]); // -> 8
missingReindeer([0]); // -> 1 (¡es el último el que falta!)
missingReindeer([1]); // -> 0 (siempre se empieza por el id 0)
