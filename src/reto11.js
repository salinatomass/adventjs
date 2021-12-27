// Reto: https://adventjs.dev/challenges/11

const ticket = 12;
const fidelityCard = 250;

function shouldBuyFidelity(times) {
  const ticketFinalPrice = ticket * times;
  let lastTicket = ticket * 0.75;
  let fidelityCardFinalPrice = fidelityCard + lastTicket;

  for (let i = 1; i < times; i++) {
    lastTicket = lastTicket * 0.75;
    fidelityCardFinalPrice += lastTicket;
  }

  if (fidelityCardFinalPrice < ticketFinalPrice) return true;

  return false;
}

// ______________________________________________________________________

shouldBuyFidelity(3);
// Entrada normal: 12$ * 3 = 36$
// Tarjeta fidelidad: 250$ + (12$ * 0,75) +  (12$ * 0,75 * 0,75) + (12$ * 0,75 * 0,75 * 0,75) = 270,8125$

shouldBuyFidelity(1); // false -> Mejor comprar tickets de un sólo uso
shouldBuyFidelity(100); // true -> Mejor comprar tarjeta fidelidad
