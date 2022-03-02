// Exemplo 1: Exibindo diferentes alimentos de acordo com a necessidade do usuário

let alimento = 'Gordura'

switch (alimento) {
  case 'Proteína':
    mensagem = 'Carne, leite, aveia, amêndoas';
    break;
  case 'Carboidrato':
    mensagem = 'Banana, batata doce, feijão, pão';
    break;
  default:
    mensagem = 'Cuidado com a alimentação!';
}

// Exemplo 2: o uso do break não é necessário?

let cargo = 'gerente'
let salario = 2000

switch (cargo) {
  case 'gerente':
    salario *= 1.15;
  case 'supervisor':
    salario *= 1.10;
  default:
    salario *= 1.05;    
}

// Exemplo 3: Quando ausência do break evita a escrita de linhas de código desnecessárias

let mes = 'Maio'

switch (mes) {
  case 'Janeiro':
  case 'Fevereiro':
  case 'Março':
    console.log('Verão!');
    break;
  case 'Abril':
  case 'Maio':
  case 'Junho':
    console.log('Outono!');
    break;
  case 'Julho':
  case 'Agosto':
  case 'Setembro':
    console.log('Inverno!');
    break;
  case 'Outubro':
  case 'Novembro':
  case 'Dezembro':
    console.log('Primavera!');
}

// Exemplo 4: customizando uma mensagem de boas-vindas

let sexo = 'feminino'

switch (sexo) {
  case 'feminino':
    console.log('Bem-vinda!');
    break;
  case 'masculino':
    console.log('Bem-vindo!');
  default:
    console.log('por favor informar um sexo valido: feminino/masculino');
}

// Exemplo 5

let mes = 4;
let nomeMes = ''

switch (mes) {
  case 1:
    nomeMes = 'Janeiro';
    break;
  case 2:
    nomeMes = 'Fevereiro';
    break;
  case 3:
    nomeMes = 'Março';
    break;
  case 4:
    nomeMes = 'Abril';
    break;
  case 5:
    nomeMes = 'Maio';
    break;
  case 6:
    nomeMes = 'Junho'
    break
  case 7:
    nomeMes = 'Julho';
    break;
  case 8:
    nomeMes = 'Agosto';
    break;
  case 9:
    nomeMes = 'Setembro';
    break;
  case 10:
    nomeMes = 'Outubro';
    break;
  case 11:
    nomeMes = 'Novembro';
    break;
  case 12:
    nomeMes = 'Dezembro';
    break;
  default:
    nomeMes = 'Mês inexistente';
}

console.log(nomeMes)
