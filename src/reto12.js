// Reto: https://adventjs.dev/challenges/12

function getMinJump(obstacles) {
  const biggestObstacle = Math.max(...obstacles);

  for (let numberBase = 2; numberBase <= biggestObstacle; numberBase++) {
    let multiples = []; // por ejemplo [2, 4, 6, 8, ...etc]
    let currentMultiple = numberBase;

    while (currentMultiple <= biggestObstacle) {
      multiples.push(currentMultiple);
      currentMultiple += numberBase;
    }

    const crashSomeObstacle = multiples.some(n => {
      return obstacles.find(obstacle => obstacle === n);
    });
    // retorna true si cualquier múltiplo del array no evita todos los obstáculos

    if (!crashSomeObstacle) return numberBase;
  }
}

// ______________________________________________________________________

const obstacles = [5, 3, 6, 7, 9];
getMinJump(obstacles); // -> 4

getMinJump([2, 4, 6, 8, 10]); // -> 7
getMinJump([1, 2, 3, 5]); // -> 4
getMinJump([3, 7, 5]); // -> 2
getMinJump([9, 5, 1]); // -> 2
