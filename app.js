// Array para armazenar os nomes dos amigos
let arrayAmigos = [];
// Seleciona os elementos do DOM
let inputNomeAmigo = document.getElementById("amigo"); // Campo de input
let listaDosAmigosCadastrados = document.getElementById("listaAmigos"); // Lista de amigos (ul)
let nomeAmigoSorteado = document.getElementById("resultado"); // Resultado do sorteio (p)
// Função para adicionar um amigo à lista
function adicionarAmigo() {
    // Obtém o valor do input e remove espaços em branco no início e no final
    let nomeDoAmigo = inputNomeAmigo.value.trim();

    // Verifica se o campo não está vazio e se conteúdo digitado é valido
    if (!validarTexto(nomeDoAmigo)) {
        alert("Por favor, insira um nome válido.");
        inputNomeAmigo.value = "";
        document.getElementById("amigo").reset;
        return; // Sai da função se o campo estiver vazio
    }

    // Verifica se o nome já foi adicionado à lista
    if (arrayAmigos.includes(nomeDoAmigo)) {
        alert("Este nome já foi adicionado.");
        inputNomeAmigo.value = "";
        document.getElementById("amigo").reset;
        return; // Sai da função se o nome já existir
    }

    // Adiciona o nome ao array de amigos
    arrayAmigos.push(nomeDoAmigo);
    console.log(arrayAmigos);

    // Limpa o campo de input após adicionar o nome
    inputNomeAmigo.value = "";

    // Atualiza a lista de amigos na página
    atualizarListaAmigos();

    // Exibe a lista de amigos no console para depuração
    console.log("Lista de amigos:", arrayAmigos);

    // Habilita o botão de sorteio apenas se houver pelo menos dois amigos cadastrados
    let botaoSorteio = document.querySelector(".button-draw");
    botaoSorteio.disabled = arrayAmigos.length < 2;

    // Após sorteio, se cadastrar mais um nome, limpar a resposta
    document.getElementById("resultado").textContent = "";
}

// Função que valida se o conteúdo digitado é texto contém apenas letras e é maior que uma letra
function validarTexto(texto) {
    // Remove espaços extras no início e no fim
    texto = texto.trim();  

    // Verifica se o texto tem pelo menos duas letras e não contém números ou símbolos
    if (texto.length < 2) {
        return false;
    }

    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];
        if (!(char >= 'A' && char <= 'Z') && !(char >= 'a' && char <= 'z') && char !== ' ') {
            return false; // Se encontrar um caractere que não seja letra, retorna falso
        }
    }

    return true;
}

// Função para atualizar a lista de amigos na página
function atualizarListaAmigos() {
    // Limpa a lista atual
    listaDosAmigosCadastrados.innerHTML = "";
    // Adiciona cada amigo da lista ao HTML
    arrayAmigos.forEach((nome) => {
        let itemLista = document.createElement("li"); // Cria um novo elemento <li>
        itemLista.textContent = nome; // Define o texto do <li>
        listaDosAmigosCadastrados.appendChild(itemLista); // Adiciona o <li> à lista
    });
}

function sortearAmigo() {
    if (arrayAmigos.length < 2) {
        alert("Adicione pelo menos dois amigos para realizar o sorteio!");
        return;
    } else {
        let nomeAleatorio = arrayAmigos[Math.floor(Math.random() * arrayAmigos.length)];
        console.log(nomeAleatorio); // Exibe um nome aleatório no console
        document.getElementById("resultado").textContent = "O amigo secreto selecionado é: " + nomeAleatorio;
        listaDosAmigosCadastrados.innerHTML = "";
    }

}
