const nomePokemon = document.getElementById('pokemame')
function pesquisarPokemon(){
    const url = `https://pokeapi.co/api/v2/pokemon/${nomePokemon.value}`
    
    const req = new XMLHttpRequest()
    
    req.open('GET', url, true)
    
    req.onload = () =>{
        const respostaAPI = JSON.parse(req.response)
        console.log(respostaAPI)
        // document.getElementById('img').innerHTML = respostaAPI.back_shiny
        document.getElementById('teste').innerHTML += `O nome do pokemon é: ${respostaAPI.name}<br>`
        document.getElementById('teste').innerHTML += `Sua altura é : ${respostaAPI.height}<br>`
        document.getElementById('teste').innerHTML += `Seu peso é: ${respostaAPI.weight}<br>`
        document.getElementById('teste').innerHTML += `Suas habilidades são:`
        for (let cont = 0; cont < respostaAPI.abilities.length; cont++){
            document.getElementById('teste').innerHTML += `<li>${respostaAPI.abilities[cont].ability.name}</li>`
        }
        function displayImage(src, width, height, alt) {
            var a = document.createElement("img");
            a.src = src;
            a.width = width;
            a.height = height;
            a.alt = alt;
            document.getElementById('teste').append(a);
        }
        displayImage(respostaAPI.sprites.back_default,
                         276, 
                         276, 
                         'JavaScriptImage');
    }
    req.send()

}