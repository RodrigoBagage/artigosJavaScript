// EXEMPLO 1
const cores = ['Verde', 'Amarelo', 'Azul', 'Branco']

for (const index in cores) {
  console.log(index, cores[index])
}
//0 Verde
// 1 Amarelo
// 2 Azul
// 3 Branco

// EXEMPLO 2
const pessoa = {
  nome: 'Rodrigo',
  idade: 35   
}

for(const index in pessoa) {
  console.log(`${index} - ${pessoa[index]}`)
}
// nome - Rodrigo
// idade - 35

// EXEMPLO 3 
const produtos = [
  { descrição:'Resma Ofício' , valor: 11.50 , quantidade: 10},
  { descrição:'Lápis preto' , valor: 0.50 , quantidade: 3},
  { descrição:'Transferidor plástico' , valor: 1.20 , quantidade: 4}
]

let total = 0

for (const index in produtos) {
  const { valor, quantidade} = produtos[index]

  total += valor * quantidade
}

console.log(total) // 121.3

// Exemplo 1
const numeros = [10, 11, 22, 23, 34, 45, 66, 17, 28, 93, 101]

for (const numero of numeros) {
  console.log(numero)
}
/*
10
11
22
23
34
45
66
17
28
93
101
/*
// EXEMPLO 2
const carros = [
  {id: 1 , modelo: 'Corsa', marca: 'Chevrolet', preco: 18000 },
  {id: 2 , modelo: 'Punto', marca: 'Fiat', preco: 12000 },
  {id: 3 , modelo: 'Gol', marca: 'Volkswagen', preco: 14000 },
  {id: 4 , modelo: 'Saveiro', marca: 'Volkswagen', preco: 20000},
  {id: 5 , modelo: 'Uno', marca: 'Fiat', preco: 12000 }
]

let total = 0

for (const carro of carros) {
  total += carro.preco
}

// coverte o número para o padrão monetário
const valorFinal = Number(total).toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL'
})
console.log(valorFinal) // R$ 76.000,00

*/

// EXEMPLO 3
const artigo = document.querySelectorAll('article > p')

for(const paragrafo of artigo) {
  paragrafo.classList.add('read')
}
