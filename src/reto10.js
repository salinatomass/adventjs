// Reto: https://adventjs.dev/challenges/10

const coins = [50, 20, 10, 5, 2, 1];

function getCoins(change) {
  const result = [];
  let rest = change;

  coins.forEach(coin => {
    let count = 0;
    while (coin <= rest) {
      count++;
      rest -= coin;
    }
    result.unshift(count);
  });

  return result;
}

// ______________________________________________________________________

getCoins(51); // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
getCoins(3); // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
getCoins(5); // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
getCoins(16); // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
getCoins(100); // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos
