// Reto: https://adventjs.dev/challenges/15

function checkSledJump(heights) {
  const maxHeight = Math.max(...heights);
  let climb = true;

  for (let i in heights) {
    const current = heights[i];
    const next = heights[parseInt(i) + 1];

    if (climb && next <= current) return false; // si no sube estrictamente
    if (!climb && next >= current) return false; // si no baja estrictamente

    if (next === maxHeight) climb = false;
    if (current === maxHeight && next === undefined) return false; // si solo sube

    if (!climb && next === undefined) return true; // cuando terminal el proceso
  }

  return true;
}

// ______________________________________________________________________

checkSledJump([1, 2, 3, 2, 1]); // true: sube y baja de forma estricta
checkSledJump([0, 1, 0]); // -> true: sube y baja de forma estricta
checkSledJump([0, 3, 2, 1]); // -> true: sube y baja de forma estricta
checkSledJump([0, 1000, 1]); // -> true: sube y baja de forma estricta

checkSledJump([2, 4, 4, 6, 2]); // false: no sube de forma estricta
checkSledJump([1, 2, 3]); // false: sólo sube
checkSledJump([1, 2, 3, 2, 1, 2, 3]); // false: sube y baja y sube... ¡no vale!
