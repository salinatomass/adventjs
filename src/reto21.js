// Reto: https://adventjs.dev/challenges/21

function canCarry(capacity, trip) {
  const points = [];
  let giftsCount = 0;

  trip.forEach(route => {
    points.push({ point: route[1], take: route[0], delivery: false });
    points.push({ point: route[2], take: false, delivery: route[0] });
  });

  const sortedPoints = points.sort((a, b) => a.point - b.point);

  for (let point of sortedPoints) {
    giftsCount = point.take
      ? giftsCount + point.take
      : giftsCount - point.delivery;

    if (giftsCount > capacity) return false;
  }

  return true;
}

// ______________________________________________________________________

canCarry(4, [
  [2, 5, 8],
  [3, 6, 10],
]);
// false
// En el punto 5 recoge 2 regalos...
// En el punto 6 recoge 3 regalos...
// Del punto 6 al 8 tendría 5 regalos en total
// Y su capacidad es 4... así que ¡no podría!

canCarry(3, [
  [1, 1, 5],
  [2, 2, 10],
]);
// true
// En el punto 1 recoge 1 regalo...
// En el punto 2 recoge 2 regalos...
// En el punto 5 entrega 1 regalo...
// En el punto 10 entrega 2 regalos...
// ¡Sí puede! Nunca superó la carga máxima de 3 regalos
