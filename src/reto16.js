// Reto: https://adventjs.dev/challenges/16

const symbolsList = { '.': 1, ',': 5, ':': 10, ';': 50, '!': 100 };

function decodeNumber(symbols) {
  const symbolsArray = symbols.split('');
  const values = symbolsArray.map(sym => symbolsList[sym] || undefined);

  const cantDecode = values.some(n => n === undefined);
  if (cantDecode) return NaN;

  const reducer = (accum, current, index, arr) => {
    const next = arr[index + 1];

    if (current < next) return accum - current;
    return accum + current;
  };

  return values.reduce(reducer, 0);
}

// ______________________________________________________________________

decodeNumber('...'); // 3
decodeNumber('.,'); // 4 (-1 + 5)
decodeNumber(',.'); // 6 (5 + 1)
decodeNumber(',...'); // 8 (5 + 3)
decodeNumber('.........!'); // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
decodeNumber('.;'); // 49 (-1 + 50)
decodeNumber('..,'); // 5 (1 - 1 + 5)
decodeNumber('..,!'); // 95 (1 - 1 - 5 + 100)
decodeNumber('.;!'); // 49 (-1 -50 + 100)
decodeNumber('!!!'); // 300 (100 + 100 + 100)
decodeNumbers(';!'); // 50 (-50 + 100)
decodeNumbers(';.W'); // NaN
