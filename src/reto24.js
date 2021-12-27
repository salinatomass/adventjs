// Reto: https://adventjs.dev/challenges/24

const isObject = obj =>
  Object.prototype.toString.call(obj) === '[object Object]';

function checkIsSameTree(treeA, treeB) {
  const keysA = Object.keys(treeA);
  const keysB = Object.keys(treeB);

  if (keysA.length !== keysB.length) return false;

  for (let key of keysA) {
    const valA = treeA[key];
    const valB = treeB[key];
    const areObjects = isObject(valA) && isObject(valB);

    if (
      (areObjects && !checkIsSameTree(valA, valB)) ||
      (!areObjects && valA !== valB)
    )
      return false;
  }

  return true;
}

// ______________________________________________________________________

const tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null },
};

checkIsSameTree(tree, tree); // true

const tree2 = {
  value: 1,
  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  right: { value: 5, left: null, right: { value: 4, left: null, right: null } },
};

checkIsSameTree(tree, tree2); // false
checkIsSameTree(tree2, tree2); // true
