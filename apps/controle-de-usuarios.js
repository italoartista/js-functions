// Array de jogadores
let jogadores = [
    { nome: "Alice", idade: 25, email: "alice@example.com", nivel: 10, pontuacao: 1500, status: "online" },
    { nome: "Bob", idade: 30, email: "bob@example.com", nivel: 12, pontuacao: 2000, status: "offline" },
];

// Função para adicionar um jogador
function adicionarJogador(nome, idade, email, nivel, pontuacao, status) {
    jogadores.push({ nome, idade, email, nivel, pontuacao, status });
    document.dispatchEvent(new CustomEvent('jogadorAdicionado', { detail: { nome, idade, email, nivel, pontuacao, status } }));
}

// Função para remover um jogador pelo email
function removerJogador(email) {
    jogadores = jogadores.filter(jogador => jogador.email !== email);
    document.dispatchEvent(new CustomEvent('jogadorRemovido', { detail: { email } }));
}

// Função para atualizar o status de um jogador
function atualizarStatus(email, novoStatus) {
    jogadores = jogadores.map(jogador => 
        jogador.email === email ? { ...jogador, status: novoStatus } : jogador
    );
    document.dispatchEvent(new CustomEvent('statusAtualizado', { detail: { email, novoStatus } }));
}

// Testando as funções
adicionarJogador("Charlie", 35, "charlie@example.com", 8, 1200, "online");
removerJogador("alice@example.com");
atualizarStatus("bob@example.com", "online");
console.log(jogadores);

// Utilizando map para transformar os dados dos jogadores
const nomes = jogadores.map(jogador => jogador.nome);
console.log(nomes);

// Utilizando filter para selecionar jogadores com nível acima de um certo valor
const jogadoresNivelAlto = jogadores.filter(jogador => jogador.nivel > 10);
console.log(jogadoresNivelAlto);

// Utilizando forEach para iterar sobre os jogadores
jogadores.forEach(jogador => console.log(`${jogador.nome} - ${jogador.email} - ${jogador.status}`));

// Função que recebe um callback para simular uma operação assíncrona
function obterJogadores(callback) {
    setTimeout(() => {
        callback(jogadores);
    }, 1000);
}

// Chamando a função com um callback anônimo
obterJogadores(jogadoresObtidos => {
    console.log("Jogadores obtidos:", jogadoresObtidos);
});

// Desestruturação de objetos de jogador
jogadores.forEach(({ nome, idade, email, nivel, pontuacao, status }) => {
    console.log(`Nome: ${nome}, Idade: ${idade}, Email: ${email}, Nível: ${nivel}, Pontuação: ${pontuacao}, Status: ${status}`);
});

// Desestruturação de arrays
const [primeiroJogador, segundoJogador] = jogadores;
console.log(primeiroJogador, segundoJogador);

// Operador de espalhamento, atualizando o array de jogadores
function adicionarJogadores(...novosJogadores) {
    jogadores = [...jogadores, ...novosJogadores];
}

// Adicionando múltiplos jogadores de uma vez
adicionarJogadores(
    { nome: "Dave", idade: 40, email: "dave@example.com", nivel: 15, pontuacao: 2500, status: "online" },
    { nome: "Eve", idade: 22, email: "eve@example.com", nivel: 5, pontuacao: 800, status: "offline" }
);

console.log(jogadores);

// Adicionando eventos personalizados
document.addEventListener('jogadorAdicionado', (event) => {
    console.log('Jogador adicionado:', event.detail);
});

document.addEventListener('jogadorRemovido', (event) => {
    console.log('Jogador removido:', event.detail);
});

document.addEventListener('statusAtualizado', (event) => {
    console.log('Status atualizado:', event.detail);
});

// Testando os eventos
adicionarJogador("Frank", 28, "frank@example.com", 9, 1100, "offline");
removerJogador("charlie@example.com");
atualizarStatus("frank@example.com", "online");
