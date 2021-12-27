// Reto: https://adventjs.dev/challenges/07

const itsAnArrayOfStrings = arr => arr.every(item => typeof item === 'string'); // Solo queremos strings para empezar a buscar los productos

function contains(store, product) {
  let storeArray = Object.entries(store).flat();

  while (!itsAnArrayOfStrings(storeArray)) {
    const currentStore = [];

    storeArray.forEach(item => {
      if (typeof item === 'object') currentStore.push(Object.entries(item));
    });

    storeArray = currentStore.flat(2);
  }

  return storeArray.includes(product); // Finalmente todos nuestros items son strings
}

// ______________________________________________________________________

const almacen = {
  estanteria1: {
    cajon1: {
      producto1: 'coca-cola',
      producto2: 'fanta',
      producto3: 'sprite',
    },
  },
  estanteria2: {
    cajon1: 'vacio',
    cajon2: {
      producto1: 'pantalones',
      producto2: 'camiseta', // <- ¡Está aquí!
    },
  },
};

contains(almacen, 'camiseta'); // true

const otroAlmacen = {
  baul: {
    fondo: {
      objeto: 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando',
    },
  },
};

contains(otroAlmacen, 'gameboy'); // false
