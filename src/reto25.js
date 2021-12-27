// Reto: https://adventjs.dev/challenges/25

function canMouseEat(direction, game) {
  const row = game.findIndex(row => row.includes('m'));
  const collumn = game[row].findIndex(collumn => collumn === 'm');

  const up = game[row - 1] ? game[row - 1][collumn] : undefined;
  const down = game[row + 1] ? game[row + 1][collumn] : undefined;
  const right = game[row][collumn + 1];
  const left = game[row][collumn - 1];

  const directions = { up, down, right, left };

  return directions[direction] === '*';
}

// ______________________________________________________________________

const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*'],
];

canMouseEat('up', room); // false
canMouseEat('down', room); // true
canMouseEat('right', room); // false
canMouseEat('left', room); // false

const room2 = [
  [' ', '*', 'm', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' '],
];

canMouseEat('up', room2); // false
canMouseEat('down', room2); // false
canMouseEat('right', room2); // true
canMouseEat('left', room2); // false
