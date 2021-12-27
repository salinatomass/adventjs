// Reto: https://adventjs.dev/challenges/06

function sumPairs(numbers, result) {
  let arrayResult = [];

  for (let i in numbers) {
    const numbersToAdd = [...numbers];
    const baseNumber = numbers[i];
    numbersToAdd.splice(i, 1);

    const match = numbersToAdd.find(n => n + baseNumber === result);
    if (match) return (arrayResult = [baseNumber, match]);
  }

  if (arrayResult.length === 0) return null;
  return arrayResult;
}

// ______________________________________________________________________

sumPairs([3, 5, 7, 2], 10); // [3, 7]
sumPairs([-3, -2, 7, -5], 10); // null
sumPairs([2, 2, 3, 1], 4); // [2, 2]
sumPairs([6, 7, 1, 2], 8); // [6, 2]
sumPairs([0, 2, 2, 3, -1, 1, 5], 6); // [1, 5]
