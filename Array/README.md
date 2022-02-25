# JavaScript: Array

É comum durante o desenvolvimento de um software surgir a necessidade de fazer iterações em um Array, para isso o JavaScript conta com uma série de métodos para facilitar este tipo de tarefa sem a necessidade de um laço for, como veremos a seguir.

## Na prática
### Exemplo 1

O método filter serve para filtrar em um Array apenas os resultados que cumpram com determinada condição esperada. Ele pode ser aplicado em uma lista de automóveis para filtrar apenas os que são da marca Renault, como no exemplo abaixo:
```
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

  const carroFiltrado = listaCarros.filter(carro => carro.marca === 'Renault')

  console.log(carroFiltrado) // [ { id: 9, modelo: 'Logan', marca: 'Renault' } ]
```
Perceba que definimos como condição para o filtro carro.marca ser igual a Renault, com isso nosso novo Array armazenado em carroFiltrado passou a ter apenas o item com id 9.

### Exemplo 2
Agora considere a necessidade de filtrar o mesmo Array do exemplo 1, porém filtrando apenas o item que tenha a marca Volkswagen e modelo igual a Saveiro - esta tarefa pode ser feita novamente com o filter como vemos abaixo:
```
const carroFiltrado = listaCarros.filter(carro =>
    carro.marca === 'Volkswagen' &&
    carro.modelo === 'Saveiro'
  )

  console.log(carroFiltrado) // [ { id: 4, modelo: 'Saveiro', marca: 'Volkswagen' } ]
```
Perceba que o filtro continua simples, a única mudança foi a adição de uma segunda condição para poder encontrar o resultado.

### Exemplo 3
O método map percorre cada item de um Array e retorna um novo Array ao final de sua execução.

```Array.prototype.map((value: any, index: number, array: Array<any>) => item): Array<any>```

Para facilitar o entendimento desse método temos o exemplo abaixo onde utilizamos o map para percorrer uma lista de números e multiplicar por 5 cada número deste Array:
```
const lista = [ 1, 5, 8, 4 ]

  const resultado = lista.map(item => item * 5)

  console.log(resultado) // [ 5, 25, 40, 20 ]
```
### Exemplo 4
reduce() permite concatenar os elementos do Array a partir de seus elementos.

```Array.reduce((anterior: any, atual: any) => concatenacao: any): any```
Considere o Array de carros que utilizamos no exemplo do filter e que seja necessário somar o preço de todos os automóveis para saber o total em estoque. Para isso podemos utilizar o reduce como no exemplo abaixo:
```
const sum = listaCarros.reduce((previous, current) => previous + current.preco, 0)

  console.log(sum) // 144
```
### Exemplo 5
O método includes verifica se um Array possuí determinado elemento e retorna um booleano.

```Array<item>.includes(searchElement: item): boolean```
O método includes pode ser ser aplicado em um Array para pesquisar a existência de um item especifico, abaixo uma ilustração dessa situação:
```
const items = [ 10, 20, 30 ]

  console.log(
    items.includes(10), // true
    items.includes(50), // false
    items.includes(20), // true
  )
```
Fonte: DEVMEDIA https://www.devmedia.com.br/javascript-array/41204
