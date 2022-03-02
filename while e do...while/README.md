# JavaScript: while e do...while

Essas estruturas de controle de fluxo executam um trecho de código enquanto uma condição for verdadeira. Aprenda como utilizá-las nesse artigo.

Executa uma instrução ate que uma condição especifica seja verdadeira.

## Visão geral
No while um bloco de código é executado ate que um teste condicional se torne falso, sendo importante lembrar que a condição analisada para a execução do laço de repetição deverá retornar um valor booleano. Por exemplo:
```
let salario = 1000

while (salario < 5000) {
  salario += 100;

  console.log("O salário ainda é R$" + salario);
}
```
Perceba que o bloco de código dentro do while foi executado até que a condição salario < 5000 se tornasse falsa permitindo ao código continuar o fluxo normal da aplicação.

É possível também fazer com que o while execute ao menos uma vez seu bloco de código utilizando a instrução do..while. Por exemplo, considere que haja um bloco de instruções em um software para definir o aumento de salário dos funcionários de uma empresa e validar os que estão abaixo da média, colocando-os na base global de aumento como podemos ver abaixo:
```
let aumento = 500;

do {
  console.log("O salário ainda é R$" + aumento);

  aumento += 50;
} while (aumento < 500)
```
Perceba que mesmo que a condição seja falsa o bloco de código será executado ao menos uma vez.

## Sintaxe
```
while (expressao)
  instrucao

// ou

do
  instrucao
while (expressao)
```
* **instrucao**: bloco de código executado dentro do while.
* **expressao**: condição avaliada para a execução do bloco.

## while na prática
### Exemplo 1
Neste exemplo vamos utilizar o while para criar um contador que irá incrementar um número até que ele tenha valor igual a 50.
```
let contador = 0;

while (contador < 50) {
  console.log('repetição nº ' + contador);

  contador++;
}
```
### Exemplo 2
No exemplo abaixo temos um Array com uma lista de cores e precisamos saber o nome e valor de cada uma das suas propriedades.
```
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
// ...
```
### Exemplo 3
No exemplo a seguir demonstramos como somar todos os valores de um Array:
```
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
```
### Exemplo 4
Neste exemplo vamos percorrer uma lista de números e exibir no console o valor de cada um de seus itens.
```
const numeros = [ 10, 11, 22, 23, 34, 45, 66, 17, 28, 93, 101 ];

let index = 0;

while (index < numeros.length) {
  console.log('numero atual %s: ', numeros[index]);
  index++;
}
```
### Exemplo 5
No exemplo abaixo temos uma lista de carros e precisamos calcular a soma de valor de todos os itens. Podemos solucionar este problema da seguinte forma.
```
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
```
## do...while na prática

### Exemplo 1
Neste exemplo vamos imprimir os valores do array linguagens. Para isso criamos um contador (index) que será incrementado a cada execução do código dentro do loop. O loop será executado enquanto o index for menor que a quantidade de elementos do array linguagens.
```
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
```
### Exemplo 2
No exemplo a seguir vamos imprimir a média das notas dos alunos. Aqui temos o array alunos que guarda objetos com o nome e a nota dos alunos. Vamos utilizar o do...while para varrer esse array e somar cada nota à variável somaDasNotas. No final da execução do código (dentro do loop) vamos incrementar o contador index.
```
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
```
### Exemplo 3
No código abaixo a cada execução do código dentro do loop será impresso a volta atual. Isso vai acontecer enquanto a voltaAtual for menor que o número de voltas.
```
const quantidadeDeVoltas = 5;
let voltaAtual = 6;

do {
  console.log(voltaAtual);

  voltaAtual++;
} while (voltaAtual <= quantidadeDeVoltas);

// Será impresso: 6
```
Perceba que aqui a volta 6 será impressa mesmo não respeitando a condição (voltaAtual <= quantidadeDeVoltas), isso porque o do...while primeiro vai executar o código para depois verificar a condição.

Fonte: https://www.devmedia.com.br/javascript-while-e-do-while/41015
