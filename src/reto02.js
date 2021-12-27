// Reto: https://adventjs.dev/challenges/02

function listGifts(letter) {
  const letterObj = {};
  const letterArray = letter.split(' ').filter(word => word !== '');
  // Podríamos usar letter.trim().split(' ') pero no eliminaría los espacios del medio

  letterArray.forEach(word => {
    if (word.includes('_')) return;

    if (letterObj[word]) letterObj[word] += 1;
    else letterObj[word] = 1;
  });

  return letterObj;
}

// ______________________________________________________________________

const carta = 'bici coche balón _playstation bici coche peluche';

listGifts(carta); // { bici: 2, coche: 2, balón: 1, peluche: 1 }
