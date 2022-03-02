// while

// Exemplo 1
let contador = 0;

while (contador < 50) {
  console.log('repetição nº ' + contador);

  contador++;
}

// Exemplo 2
const cores = [
    'Verde',
    'Amarelo',
    'Azul',
    'Branco'
  ];
  
  let index = 0;
  
  while (index < cores.length) {
    console.log(index, cores[index]);
    index++;
  }
  
  // 0 'Verde'
  // 1 'Amarelo'
  // 2 'Azul'
  // 3 'Branco'

  // Exemplo 3

  const produtos = [
    { descricao: 'Resma Ofício', valor: 11.50, quantidade: 10 },
    { descricao: 'Lapis preto', valor: 0.50, quantidade: 3 },
    { descricao: 'Transferidor plastico', valor: 1.20, quantidade: 4 }
  ];
  
  let total = 0;
  let index = 0;
  
  while (index < produtos.length) {
    const { valor, quantidade } = produtos[index];
  
    total += valor * quantidade;
    index++;
  }
  
  console.log(total);
  // 121.3

// Exemplo 4

const numeros = [ 10, 11, 22, 23, 34, 45, 66, 17, 28, 93, 101 ];

let index = 0;

while (index < numeros.length) {
  console.log('numero atual %s: ', numeros[index]);
  index++;
}

// Exemplo 5
const carros = [
    { id: 1, modelo: 'Corsa', marca: 'Chevrolet', preco: 18000 },
    { id: 2, modelo: 'Punto', marca: 'Fiat', preco: 12000 },
    { id: 3, modelo: 'Gol', marca: 'Volkswagen', preco: 14000 },
    { id: 4, modelo: 'Saveiro', marca: 'Volkswagen', preco: 20000 },
    { id: 5, modelo: 'Uno', marca: 'Fiat', preco: 12000 }
  ];
  
  let total = 0;
  let index = 0;
  
  while (index < carros.length) {
    total += carros[index].preco;
    index++;
  }
  
  // converte o número para o padrão monetário
  const valorFinal = Number(total).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
  
  console.log(valorFinal);
  // R$ 76.000,00

// do...while na prática

// Exemplo 1

const linguagens = [ 'JavaScript', 'Python', 'C#', 'PHP'];
let index = 0;

do {
  console.log(linguagens[index]);

  index++
} while (index < linguagens.length);

// Será impresso
// JavaScript
// Python
// C#
// PHP

// Exemplo 2

const alunos = [
    { aluno: 'João', nota: 10},
    { aluno: 'Ana', nota: 8},
    { aluno: 'Fernando', nota: 9},
    { aluno: 'Bia', nota: 10},
  ];
  
  let index = 0;
  let somaDasNotas = 0;
  let totalAlunos = alunos.length;
  
  do {
    somaDasNotas += alunos[index].nota;
  
    index++;
  } while (index < totalAlunos);
  
  let media = somaDasNotas / totalAlunos;
  
  console.log(media);
  
  // Será impresso: 9.25

// Exemplo 3

const quantidadeDeVoltas = 5;
let voltaAtual = 6;

do {
  console.log(voltaAtual);

  voltaAtual++;
} while (voltaAtual <= quantidadeDeVoltas);

// Será impresso: 6
