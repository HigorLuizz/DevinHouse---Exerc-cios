var input = document.getElementById("inputItem")

const botao = document.getElementById("btn1");

var lista = document.getElementsByTagName("ul")

function adicionarElementosLista(){
    lista[0].innerHTML += "<li>"+input.value+"</li>"
}
function mudarCorDoBotão(){
    botao.style.backgroundColor = "Green";
}
function mudarCorQuandoMouseSai(){
    botao.style.backgroundColor = "White";
}