# JavaScript: for, for...in, for...of

A instrução **for** cria um ciclo de repetições no programa, cujo encerramento se dá quando uma expressão lógica **for** avaliada como verdadeira. Essa instrução consiste de três expressões que juntas controlam o número de repetições do ciclo, além de um bloco de código no qual descrevemos o que deve ser executado a cada iteração.

## Visão geral

Observe o array abaixo, que contém dados sobre carros.
```
var carros = [
  { id: 1, modelo: 'Corsa', marca: 'Chevrolet', preco: 45000, createdAt: 1534506085621 },
  { id: 2, modelo: 'Punto', marca: 'Fiat', preco: 120000, createdAt: 1534506085621 }
]

var total = 0
```
Considere que desejamos calcular a média de preço dos carros. Para isso devemos primeiro obter a soma dos preços de todos os carros.

Usando a sintaxe do **for** podemos escrever esse código da seguinte forma:
```
for(var i = 0; i < carros.length; i++) {
    total += carros[i].preco
}
```
No exemplo acima a instrução **var i = 0** será executada no início da repetição e **i++** será repetido até que a expressão lógica **i < carros.length** retorne **true**. A cada repetição, a soma **total += carros[i].preco** será realizada.

## for...of
Podemos reescrever esse mesmo código usando **for...of** conforme exemplificado abaixo.
```
for(const carro of carros) {
    total += carro.preco
}
```
Em muitos casos o uso da variável **i**, presente no código que utiliza **for**, não será necessário, exceto para acessar os itens de um array. **for...of** nos permite alcançar o mesmo resultado acessando diretamente esses itens com um código mais compacto.

E com **for...in** o array pode ser percorrido de forma semelhante ao **for**, sem que tenhamos que controlar o seu encerramento.
```
for(const i in carros) {
    total += carros[i].preco
}
```
## for...in

O laço de repetição **for...in** permite iterar sobre as propriedades enumeradas de um objeto de acordo com a ordem em que foram inseridos.

## Sintaxe
```
for ([indice] in [objeto])
  declaração
```  
## Na prática

### Exemplo 1
No exemplo abaixo temos um Array com uma lista de cores e precisamos saber o nome e valor de cada uma das suas propriedades.
```
const cores = [ 'Verde', 'Amarelo', 'Azul', 'Branco' ]

for (const index in cores) {
  console.log(index, cores[index])
}
// 0 "Verde"
// 1 "Amarelo"
// ...
```
### Exemplo 2
No exemplo a seguir temos um objeto chamado pessoa e precisamos retornar o nome e valor de suas propriedades.
```
const pessoa = {
  nome: 'Bruno',
  idade: 25
}

for (const index in pessoa) {
  console.log(`${index} - ${pessoa[index]}`)
}
// nome - Bruno | idade - 25
```
### Exemplo 3
No exemplo a seguir demonstramos como somar todos os valores de um Array:
```
const produtos = [
  { descricao: 'Resma Ofício', valor: 11.50, quantidade: 10 },
  { descricao: 'Lapis preto', valor: 0.50, quantidade: 3 },
  { descricao: 'Transferidor plastico', valor: 1.20, quantidade: 4 }
]

let total = 0

for (const index in produtos) {
  const { valor, quantidade } = produtos[index]

  total += valor * quantidade
}

console.log(total) // 121.3
```

## for...of
O laço de repetição for...of permite percorrer um objeto iterativo (Array, Map, Set) e executar um bloco de código.

## Sintaxe
```
for ([item] of [iteravel])
  declaracao
```
## Na prática

### Exemplo 1
Neste exemplo vamos percorrer uma lista de números e exibir no console o valor de cada um de seus itens.
```
const numeros = [ 10, 11, 22, 23, 34, 45, 66, 17, 28, 93, 101 ]

for (const numero of numeros) {
  console.log(numero)
}
```
### Exemplo 2
No exemplo abaixo temos uma lista de carros e precisamos calcular a soma de valor de todos os itens. Podemos solucionar este problema da seguinte forma.
```
const carros = [
  { id: 1, modelo: 'Corsa', marca: 'Chevrolet', preco: 18000 },
  { id: 2, modelo: 'Punto', marca: 'Fiat', preco: 12000 },
  { id: 3, modelo: 'Gol', marca: 'Volkswagen', preco: 14000 },
  { id: 4, modelo: 'Saveiro', marca: 'Volkswagen', preco: 20000 },
  { id: 5, modelo: 'Uno', marca: 'Fiat', preco: 12000 }
]

let total = 0

for (const carro of carros) {
  total += carro.preco
}

// converte o número para o padrão monetário
const valorFinal = Number(total).toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL'
})

console.log(valorFinal) // R$ 76,000.00
```
Na linha 9 definimos uma variável com valor zero para armazenar a soma do valor unitário de cada carro.

Entre as linhas 14 e 17 utilizamos o **for...of** para iterar o Array de carros

Entre as linhas 14 e 17 perceba que ao contrario do **for...in** nele temos o objeto ao invés de seu índice no Array

### Exemplo 3
É possível também utilizar o **for...of** para percorrer uma lista de elementos do **DOM**. No exemplo abaixo utilizamos o **querySelectorAll** para capturar todos os parágrafos de uma página **HTML** e em seguida utilizamos o **for...of** para percorrer cada item da lista adicionando a classe lida em cada um dos elementos.
```
const artigo = document.querySelectorAll('article > p')

for (const paragrafo of artigo) {
  paragrafo.classList.add("read")
}
```
Fonte:[DEVMEDIA](https://www.devmedia.com.br/javascript-for-for-in-for-of/41018)
