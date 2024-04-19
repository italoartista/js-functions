```markdown
# Implementação do Hook `useState` 

## Passo a Passo da Implementação:

1. **Definição da Função `createComponent`:** 

```javascript
function createComponent(initialState) {
  // Definição das variáveis locais: estado inicial e array de listeners
  let state = initialState;
  let listeners = [];

  // Função para atualizar o estado e notificar os listeners
  const setState = (newState) => {
    state = newState;
    listeners.forEach(listener => listener(state));
  };

  // Função para adicionar um listener
  const subscribe = (listener) => {
    listeners.push(listener);
  };

  // Template do componente
  const template = () => {
    return `
      <div>
        <p>Estado atual: ${state}</p>
        <button onclick="updateState()">Atualizar Estado</button>
      </div>
    `;
  };

  // Função para atualizar o estado e renderizar o componente novamente
  const updateState = () => {
    const newState = Math.random(); // Gera um novo estado aleatório
    setState(newState); // Atualiza o estado
    render(); // Renderiza o componente novamente
  };

  // Função para renderizar o componente
  const render = () => {
    const componentContainer = document.getElementById('component-container');
    componentContainer.innerHTML = template();
  };

  // Renderiza o componente pela primeira vez
  render();

  // Retorna as funções que serão utilizadas pelo componente
  return {
    subscribe,
    setState,
    render
  };
}
```

2. **Criação do Componente:**

```javascript
// Criar o componente com um estado inicial
const myComponent = createComponent(0);
```

3. **Adição de um Listener para o Estado do Componente:**

```javascript
// Adicionar um listener para o estado do componente
myComponent.subscribe((newState) => {
  console.log(`Novo estado: ${newState}`);
});
```

## Explicação:

- **Closures:** Utilizamos closures para criar um escopo privado para as variáveis do estado e dos listeners. Isso permite que essas variáveis sejam acessadas apenas pelas funções internas da função `createComponent`.

- **Templates de String:** Usamos templates de string para criar o componente de forma mais legível e fácil de manter. Isso nos permite inserir dinamicamente o estado atual dentro do template.

- **Atualização do Estado e Renderização:** Sempre que o estado é atualizado através da função `setState`, todos os listeners são notificados e o componente é renderizado novamente com o novo estado.

```
