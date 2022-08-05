// function mostrarInformacoes(){
//     function display_image(src, width, height, alt) {
//         var a = document.createElement("img");
//         a.src = src;
//         a.width = width;
//         a.height = height;
//         a.alt = alt;
//         divEsquerda.append(a);
//     }
//     display_image(inputImagem.value,
//                      276, 
//                      110, 
//                      'JavaScriptImage');
//     const nome = document.createElement("div")
//     nome.classList.add('nome');
//     nome.innerHTML = "<h3>"+inputNome.value+"</h3>"
//     const descricao = document.createElement("div")
//     descricao.classList.add('descricao');
//     descricao.innerHTML = inputDescricao.value
//     divEsquerda.append(nome)
//     divEsquerda.append(descricao)
// }
// function mudarCorBotao(){
//     const botao = document.getElementById("btn");
//     botao.style.backgroundColor = "Green";
// }
const divDireita = document.getElementsByClassName("direita")[0]
export function displayImage(src, width, height, alt) {
        var a = document.createElement("img");
        a.src = src;
        a.width = width;
        a.height = height;
        a.alt = alt;
        divDireita.append(a);
    }