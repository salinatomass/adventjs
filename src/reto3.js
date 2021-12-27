// Reto: https://adventjs.dev/challenges/03

function isValid(letter) {
  const letterArray = letter.split(' ');

  const excludeList = ['{', '}', '[', ']', '()'];

  const verification = letterArray.every(gift => {
    const fail = excludeList.some(item => gift.includes(item));

    if (fail) return false;
    if (gift.charAt(0) === ')') return false;
    if (gift.charAt(0) === '(' && gift.charAt(gift.length - 1) !== ')')
      return false;

    return true;
  });

  return verification;
}

// ______________________________________________________________________

isValid('bici coche (balón) bici coche peluche'); // -> ✅
isValid('(muñeca) consola bici'); // -> ✅

isValid('bici coche (balón bici coche'); // -> ❌
isValid('peluche (bici [coche) bici coche balón'); // -> ❌
isValid('(peluche {) bici'); // -> ❌
isValid('() bici'); // -> ❌
