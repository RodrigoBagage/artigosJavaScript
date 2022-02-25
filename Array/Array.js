// EXEMPLO 01
/*
const listaCarros = [
    { id: 1, modelo: 'Corsa', marca: 'Chevrolet', preco: 18.000 },
    { id: 2, modelo: 'Punto', marca: 'Fiat', preco: 12.000 },
    { id: 3, modelo: 'Gol', marca: 'Volkswagen', preco: 14.000 },
    { id: 4, modelo: 'Saveiro', marca: 'Volkswagen', preco: 20.000 },
    { id: 5, modelo: 'Uno', marca: 'Fiat', preco: 12.000 },
    { id: 6, modelo: 'Onix', marca: 'Chevrolet', preco: 25.000 },
    { id: 7, modelo: 'Palio', marca: 'Fiat', preco: 13.000 },
    { id: 8, modelo: 'Prisma', marca: 'Chevrolet', preco: 15.000 },
    { id: 9, modelo: 'Logan', marca: 'Renault', preco: 15.000 }
]

//const carroFiltrado = listaCarros.filter(carro => carro.marca === 'Renault')

//console.log(carroFiltrado) // [ { id: 9, modelo: 'Logan', marca: 'Renault' } ]
*/

// EXEMPLO 2
/*
const listaCarros = [
    { id: 1, modelo: 'Corsa', marca: 'Chevrolet', preco: 18.000 },
    { id: 2, modelo: 'Punto', marca: 'Fiat', preco: 12.000 },
    { id: 3, modelo: 'Gol', marca: 'Volkswagen', preco: 14.000 },
    { id: 4, modelo: 'Saveiro', marca: 'Volkswagen', preco: 20.000 },
    { id: 5, modelo: 'Uno', marca: 'Fiat', preco: 12.000 },
    { id: 6, modelo: 'Onix', marca: 'Chevrolet', preco: 25.000 },
    { id: 7, modelo: 'Palio', marca: 'Fiat', preco: 13.000 },
    { id: 8, modelo: 'Prisma', marca: 'Chevrolet', preco: 15.000 },
    { id: 9, modelo: 'Logan', marca: 'Renault', preco: 15.000 }
]
const carroFiltrado = listaCarros.filter(carro =>
    carro.marca === 'Volkswagen' &&
    carro.modelo === 'Saveiro'
  )

  console.log(carroFiltrado) // [ { id: 4, modelo: 'Saveiro', marca: 'Volkswagen' } ]
*/

// EXEMPLO 3
//Array.prototype.map((value: any, index: number, array: Array<any>) => item): Array<any>


const lista = [ 1, 5, 8, 4 ]

  const resultado = lista.map(item => item * 5)

  console.log(resultado) // [ 5, 25, 40, 20 ]


// EXEMPLO 4

const listaCarros = [
    { id: 1, modelo: 'Corsa', marca: 'Chevrolet', preco: 18.000 },
    { id: 2, modelo: 'Punto', marca: 'Fiat', preco: 12.000 },
    { id: 3, modelo: 'Gol', marca: 'Volkswagen', preco: 14.000 },
    { id: 4, modelo: 'Saveiro', marca: 'Volkswagen', preco: 20.000 },
    { id: 5, modelo: 'Uno', marca: 'Fiat', preco: 12.000 },
    { id: 6, modelo: 'Onix', marca: 'Chevrolet', preco: 25.000 },
    { id: 7, modelo: 'Palio', marca: 'Fiat', preco: 13.000 },
    { id: 8, modelo: 'Prisma', marca: 'Chevrolet', preco: 15.000 },
    { id: 9, modelo: 'Logan', marca: 'Renault', preco: 15.000 }
]

// Array.reduce((anterior: any, atual: any) => concatenacao: any): any

const sum = listaCarros.reduce((previous, current) => previous + current.preco, 0)

  console.log(sum) // 144  

// EXEMPLO 5
const items = [ 10, 20, 30 ]

  console.log(
    items.includes(10), // true
    items.includes(50), // false
    items.includes(20), // true
  )
