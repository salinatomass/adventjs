// Reto: https://adventjs.dev/challenges/05

function daysToXmas(date) {
  const xmasDate = new Date('Dec 25, 2021');

  const diff = xmasDate.getTime() - date.getTime();
  const daysToXmas = diff / (1000 * 60 * 60 * 24);

  if (Math.floor(daysToXmas) === daysToXmas) return daysToXmas;

  return Math.floor(daysToXmas + 1);
}

// ______________________________________________________________________

const date1 = new Date('Dec 1, 2021');
daysToXmas(date1); // 24

const date2 = new Date('Dec 24, 2021 00:00:01');
daysToXmas(date2); // 1

const date3 = new Date('Dec 24, 2021 23:59:59');
daysToXmas(date3); // 1

const date4 = new Date('December 20, 2021 03:24:00');
daysToXmas(date4); // 5
