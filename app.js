// Array para armazenar os nomes dos participantes
const nomes = [];

// Função para adicionar um nome à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome) {
        nomes.push(nome); // Adiciona o nome ao array
        atualizarLista(); // Atualiza a lista na tela
        input.value = ''; // Limpa o campo de entrada
    } else {
        alert('Por favor, digite um nome válido.');
    }
}

// Função para atualizar a lista de nomes na tela
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpa a lista atual

    nomes.forEach((nome, index) => {
        const item = document.createElement('li');
        item.textContent = nome;
        item.setAttribute('role', 'listitem');
        lista.appendChild(item);
    });
}

// Função para sortear os amigos secretos
function sortearAmigo() {
    if (nomes.length < 2) {
        alert('Adicione pelo menos 2 nomes para sortear!');
        return;
    }

    // Embaralha a lista de nomes
    const embaralhado = [...nomes].sort(() => Math.random() - 0.5);

    // Verifica se alguém tirou a si mesmo e refaz o sorteio, se necessário
    let tentativas = 0;
    while (tentativas < 100) { // Limite de tentativas para evitar loops infinitos
        let valido = true;
        for (let i = 0; i < nomes.length; i++) {
            if (nomes[i] === embaralhado[i]) {
                valido = false;
                break;
            }
        }
        if (valido) break;
        embaralhado.sort(() => Math.random() - 0.5); // Reembaralha
        tentativas++;
    }

    // Exibe o resultado na tela
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    nomes.forEach((nome, index) => {
        const item = document.createElement('li');
        item.textContent = `${nome} tirou ${embaralhado[index]}`;
        item.setAttribute('role', 'listitem');
        resultado.appendChild(item);
    });
}