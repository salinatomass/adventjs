// Reto: https://adventjs.dev/challenges/20

function pangram(letter) {
  const ALPHABET = 'abcdefghijklmnñopqrstuvwxyz'.split('');
  const variations = {
    á: 'a',
    é: 'e',
    í: 'i',
    ó: 'o',
    ú: 'u',
    ä: 'a',
    ë: 'e',
    ï: 'i',
    ö: 'o',
    ü: 'u',
  };

  const str = letter
    .toLowerCase()
    .split('')
    .map(l => variations[l] || l)
    .join('');

  for (let currentLetter of ALPHABET) {
    if (!str.includes(currentLetter)) return false; // si no incluye la letra
  }

  return true;
}

// ______________________________________________________________________

pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho'); // true
pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!'); // true

pangram('Esto es una frase larga pero ni de lejos es un pangrama'); // false
pangram('De la A a la Z, nos faltan letras'); // false
