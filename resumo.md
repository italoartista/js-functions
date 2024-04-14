### 1. Map
A função `map` aplica uma função a cada elemento de uma matriz e retorna uma nova matriz com os resultados.

```javascript
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((num) => {
  return num * 2;
});

console.log(doubled); // Saída: [2, 4, 6, 8, 10]
```

- **Contexto na Programação Funcional**: `map` é uma função de ordem superior (higher-order function) que opera em uma coleção de dados e permite a transformação de cada elemento dessa coleção. É uma ferramenta essencial na programação funcional para realizar operações de mapeamento e transformação em estruturas de dados.

### 2. ForEach
A função `forEach` executa uma determinada função em cada elemento de um array.

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num) => {
  console.log(num * 2);
});

// Saída:
// 2
// 4
// 6
// 8
// 10
```

- **Contexto na Programação Funcional**: Embora `forEach` seja útil para iterar sobre uma matriz e executar uma ação em cada elemento, ela não retorna um novo array e não deve ser usada para operações de transformação ou filtragem, que são conceitos centrais na programação funcional.

### 3. Every
A função `every` verifica se todos os elementos de uma matriz satisfazem uma determinada condição.

```javascript
const numbers = [2, 4, 6, 8, 10];

const allEven = numbers.every((num) => {
  return num % 2 === 0;
});

console.log(allEven); // Saída: true
```

- **Contexto na Programação Funcional**: `every` é útil para verificar se uma condição é verdadeira para todos os elementos de uma matriz. Na programação funcional, é comum usar funções de ordem superior como `every` para realizar verificações e operações em coleções de dados de forma mais declarativa.

### 4. Find
A função `find` retorna o primeiro elemento em uma matriz que satisfaz uma determinada condição.

```javascript
const numbers = [1, 2, 3, 4, 5];

const evenNumber = numbers.find((num) => {
  return num % 2 === 0;
});

console.log(evenNumber); // Saída: 2
```

- **Contexto na Programação Funcional**: `find` é útil quando você precisa encontrar um único elemento em uma matriz com base em uma condição específica. Na programação funcional, isso é frequentemente usado para recuperar um elemento específico que atenda a certos critérios.

### 5. Filter
A função `filter` cria uma nova matriz com todos os elementos que passam em um teste especificado por uma função.

```javascript
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((num) => {
  return num % 2 === 0;
});

console.log(evenNumbers); // Saída: [2, 4]
```

- **Contexto na Programação Funcional**: `filter` é uma ferramenta poderosa na programação funcional para selecionar elementos de uma coleção com base em uma condição. Ele retorna uma nova matriz contendo apenas os elementos que atendem aos critérios especificados, mantendo a matriz original intacta.

### 6. Reduce
A função `reduce` executa uma função redutora em cada elemento de um array, resultando em um único valor de retorno.

```javascript
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Saída: 15
```

- **Contexto na Programação Funcional**: `reduce` é uma das funções mais versáteis na programação funcional. Ela pode ser usada para realizar uma ampla variedade de operações, como soma, concatenação, agrupamento, entre outras, em uma coleção de dados. A função redutora especificada é aplicada repetidamente em cada elemento da matriz até que um único valor seja produzido.
