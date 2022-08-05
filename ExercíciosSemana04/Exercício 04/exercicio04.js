var frutas = ["banana","maça","uva","pêssego"]

const txt1 = document.getElementsByClassName("first")[0]
txt1.innerHTML += frutas




// const botao = document.getElementsByClassName("btn"); 
// botao.addEventListener("click", function() {
//     const input = document.getElementById("meuInput");
//     var index = frutas.indexOf("maça");
//     frutas.splice(index,1)
//     txt1.innerHTML += frutas
    
//   })
function removerItemArray(){
    const input = document.getElementById("meuInput");
    var index = frutas.indexOf(input.value);
    if (index >-1){
        frutas.splice(index,1)
    }
    const arrayAtualizado = document.getElementsByClassName("second")[0]
    arrayAtualizado.innerHTML = frutas
    console.log(frutas)
}

