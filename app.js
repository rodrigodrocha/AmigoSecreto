//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function limparCampo(id) {
        let apagar = pegarElementoApartirDoID(id);
        apagar.value = '';
}

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
    //console.log(amigos);
}
