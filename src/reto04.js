// Reto: https://adventjs.dev/challenges/04

function createXmasTree(height) {
  let tree = [];

  const LENGTH = height * 2 - 1; // 5 de altura = 9 caracteres por nivel

  for (let i = 1; i <= height; i++)
    tree.push(createLevel(LENGTH, '*', i * 2 - 1));

  tree.push(createLevel(LENGTH, '#'));
  tree.push(createLevel(LENGTH, '#'));

  return tree.join('\n');
}

function createLevel(length, symb, symbQuantity = 1) {
  const finalString = [];
  const underscores = (length - symbQuantity) / 2;

  for (let i = 1; i <= underscores; i++) finalString.push('_');
  for (let i = 1; i <= symbQuantity; i++) finalString.push(symb);
  for (let i = 1; i <= underscores; i++) finalString.push('_');

  return finalString.join('');
}

// ______________________________________________________________________

createXmasTree(5);
/*
  ____*____
  ___***___
  __*****__
  _*******_
  *********
  ____#____
  ____#____
*/

createXmasTree(3);
/*
  __*__
  _***_
  *****
  __#__
  __#__
*/
