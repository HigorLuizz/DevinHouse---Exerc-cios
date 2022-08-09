const cepDigitado = document.getElementById("myinput")
function buscarCEP(){
    const url = `https://viacep.com.br/ws/${cepDigitado.value}/json/`
    
    fetch(url).then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
        document.getElementById("informations").innerHTML += data.logradouro+"<br>"
        document.getElementById("informations").innerHTML += data.localidade+"<br>"
        document.getElementById("informations").innerHTML += data.bairro+"<br>"
        document.getElementById("informations").innerHTML += data.uf+"<br>"
        
    
    })
}