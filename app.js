//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

//Limpando um campo apartir de um id
function limparCampo(id) {
        let apagar = pegarElementoApartirDoID(id);
        apagar.value = '';
}
// pegando um elemento apartir do ID 
function pegarElementoApartirDoID(id){
    return document.getElementById(id);
}

//Função do botão adicionar amigo na lista.
function adicionarAmigo(){
    let amigo;
    amigo = pegarElementoApartirDoID('amigo').value;
    
    if (amigo !== '') {
        amigos.push(amigo);
    }else{
        alert('Por favor, insira um nome.');
    }
    limparCampo('amigo');
    atualizarLista();
}
function atualizarLista() {
    console.log(amigos)
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        const novoAmigo = document.createElement("li");
        novoAmigo.textContent = amigos[i];
        listaAmigos.appendChild(novoAmigo);
    }
    
}
