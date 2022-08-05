// import {displayImage} from "./mostrarUsuario.js"
var inputNome = document.getElementsByClassName("inputNome")[0]
var inputImagem = document.getElementsByClassName("inputImagem")[0]
var inputDescricao = document.getElementsByClassName("inputDescricao")[0]
const divDireita = document.getElementsByClassName("direita")[0]
const divEsquerda = document.getElementsByClassName("esquerda")[0]

function mostrarInformacoes(){
    function displayImage(src, width, height, alt) {
        var a = document.createElement("img");
        a.src = src;
        a.width = width;
        a.height = height;
        a.alt = alt;
        divDireita.append(a);
    }
    displayImage(inputImagem.value,
                     276, 
                     110, 
                     'JavaScriptImage');
    const nome = document.createElement("div")
    nome.classList.add('nome');
    nome.innerHTML = `<h3>${inputNome.value}</h3>`
    const descricao = document.createElement("div")
    descricao.classList.add('descricao');
    descricao.innerHTML = inputDescricao.value
    divDireita.append(nome)
    divDireita.append(descricao)
    inputNome.value = ''
    inputDescricao.value = ''
    inputImagem.value =''
}
function mudarCorBotao(){
    const botao = document.getElementsByClassName("btn")[0]
    botao.style.backgroundColor = "Green";
}
function mudarCorQuandoMouseSai(){
    const botao = document.getElementsByClassName("btn")[0]
    botao.style.backgroundColor = "White";
}