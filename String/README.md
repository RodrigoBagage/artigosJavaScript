# JavaScript: String

Strings são sequências de caracteres, escritas entre aspas simples ou duplas. Para facilitar o processamento de textos o JavaScript dispõe do objeto String, a partir do qual temos acesso a diversos métodos utilizados para esse fim.

Processar textos é uma necessidade comum na programação. A linguagem JavaScript permite realizar essa tarefa dispondo para o programador o objeto String.

Mesmo quando um texto não é atribuído a uma variável, usando a forma literal de escrita, a partir dele podemos acessar os métodos do objeto String, como vemos abaixo.
```
var posicaoTraco = '98453-5647'.indexOf('-')

console.log(posicaoTraco) // 5
```
Isso é possível porque toda sequência de caracteres em JavaScript será automaticamente convertida para um objeto do tipo String. Assim, é fundamental o conhecimento dos métodos desse objeto para o programador que deseja programar de forma eficiente em JavaScript.

Ainda por esse comportamento padrão da linguagem, podemos criar strings em JavaScript de diferentes maneiras. Na forma literal fazemos da seguinte forma:
```
'Texto entre aspas simples'

"Texto entre aspas duplas"
```
É também possível utilizar o objeto String para obtermos strings em JavaScript assim:
```
const texto = String('Texto entre aspas simples')
```

## Sintaxe
String([ 'Texto' | "Texto" ])
Texto - Qualquer valor que desejamos converter em um string.
No JavaScript não há diferença entre uma string criado com aspas simples ou duplas.

## Na prática
### Exemplo 1
Para escrevermos certos caracteres em string precisamos utilizar uma sintaxe especial chamada notação com barra invertida ou escape notation. Abaixo utilizamos \n para quebrar um texto em duas linhas.
```
"Erro na validação do cadastro.\nO campo nome é de preenchimento obrigatório"
```
### Exemplo 2
Podemos saber qual caractere ocupa uma certa posição em uma string usando uma sintaxe parecida com a de acesso aos itens de um array. Neste caso a posição individual de cada caractere na string corresponde a um índice numérico.
```
const telefone = '98764-7645'

if(telefone[0] === '9') [curly_open]
    // Prossegue com alguma lógica
[curly_close]
```
Uma outra forma de escrevermos esse trecho de código é utilizando o método charAt(), que de forma semelhante a notação com colchetes recebe por parâmetro a posição do caractere na string cujo valor desejamos acessar.
```
const telefone = '98764-7645'

if(telefone.charAt(0) === '9') [curly_open]
    // Prossegue com alguma lógica
[curly_close]
```
Ambos os códigos são equivalentes, realizando a mesma ação.

### Exemplo 3
Saber o comprimente de um texto permite aplicar a ele certas validações, principalmente quando desejamos salvá-lo em bancos de dados ou exibi-lo em locais com certas restrições de espaço. Para isso podemos usar a propriedade length do objeto String, que reflete o comprimento da string.

Considere que desejamos limitar o número de caracteres que podem ser inseridos em um campo de formulário, implementando assim uma validação personalizada. Podemos implementar esse comportamento verificando se o comprimento do texto presente neste campo é maior que o esperado a cada novo caractere que é inserido.
```
const elemento = document.getElementById('nome')

elemento.addEventListener("keydown", function(e)[curly_open]
    if(this.value.length >= 2) [curly_open]
        e.preventDefault()

        return false;
    [curly_close]
[curly_close])
```
Note que na Linha 5 usamos o método preventDefault() do evento Keydown para impedir o comportamento padrão de inserir o caractere digitado no campo do formulário.

### Exemplo 4
O método includes() retorna true ou false como resultado para a busca por uma substring em uma string. No código a seguir usamos esse método para verificar se um cep contém os caracteres espaço ou traço.
```
const cep = '9877-065'

if(cep.includes(' ') || cep.includes('-'))[curly_open]
    // Prossegue com alguma lógica de validação
[curly_close]
```
Perceba que se a string contiver espaços em seu início ou fim ainda assim o bloco if será executado, o que pode não ser ideal em alguns casos. É comum em aplicações web que textos sejam enviados de formulários dessa maneira. Para remover espaços do início ou fim de uma string podemos usar o método trim().
```
const cep = '  9877-065 '.trim() // retorna '9877-065'
```
Caso queiramos remover os caracteres indesejados da string podemos usar o método replace() para isso.
```
const cep = '9877-065'.replace('-', '').replace(' ', '')
```
### Exemplo 5
Expressões regulares são úteis em muitos cenários no processamento de strings. O método match() do objeto String nos permite testar se um texto corresponde a um certo padrão, estabelecido por uma expressão regular, retornando null em caso de falha ou um array contendo os trechos do texto que passaram na verificação.

O código abaixo extrai a URL de um link utilizando o método match() para isso.
```
const link = '<a href="https://devmedia.com.br/guias/javascript">Confira o Guia JavaScript</a>'

console.log(link.match(/\s*(['"])(https?:\/\/.+?)\1/ig))
// [ '"https://devmedia.com.br/guias/javascript"' ]
```
Ao final da expressão regular notamos os caracteres i e g, que em JavaScript tem o seguinte significado:

* i - ignore case, não leva em consideração se as letras são maiúsculas ou minúsculas
* g - global, aplica o padrão realizando a busca por todo o texto

## Outros métodos

### charCodeAt()
Retorna o caractere no índice especificado.

### concat()
Une o texto de duas strings retornando uma nova.

### includes()
Determina onde uma string pode ser encontrada em uma outra.

### endsWith()
Determina se uma string é encerrada com os caracteres de uma outra string.

### indexOf()
Retorna o índice da primeira ocorrência para o valor especificado ou -1 se não foi encontrada.

### lastIndexOf()
Retorna o índice da última ocorrência para o valor especificado ou -1 se não foi encontrada.

### slice()
Extrai uma parte de uma string e retorna uma nova.

### split()
Desmembra uma string em substrings e retorna esses valores em um array.

### startWith()
Determina se uma string inicia com os caracteres de uma outra string.

### substring()
Recebe dois índices e retorna os caracteres entre eles.

### toLowerCase()
Converte os caracteres da string em minúsculas.

### toUpperCase()
Converte os caracteres da string em maiúsculas.

Fonte: https://www.devmedia.com.br/javascript-string/41203
