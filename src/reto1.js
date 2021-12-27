// Reto: https://adventjs.dev/challenges/01

function contarOvejas(ovejas) {
  return ovejas.filter(oveja => {
    const { name, color } = oveja;
    const nameLowerCase = name.toLowerCase();

    return (
      color === 'rojo' &&
      nameLowerCase.includes('n') &&
      nameLowerCase.includes('a')
    );
  });
}

// ______________________________________________________________________

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' },
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo' },
];

contarOvejas(ovejas); // [{ name: 'Navidad', color: 'rojo' }, { name: 'Ki Na Ma', color: 'rojo' }]
