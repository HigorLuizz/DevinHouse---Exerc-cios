const pokemonName = document.getElementById("input__search")
function aparecerAsInformacoes(){
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName.value}`
        
        const req = new XMLHttpRequest()
        
        req.open('GET', url, true)
        
        req.onload = () =>{
            const respostaAPI = JSON.parse(req.response)
            console.log(respostaAPI)
            document.getElementsByClassName('pokemonnumber')[0].innerHTML += respostaAPI.id
            document.getElementsByClassName('pokemonname')[0].innerHTML += respostaAPI.name
            document.getElementById('pokemontype').innerHTML += respostaAPI.types[0].type.name
            document.getElementById('weight').innerHTML += respostaAPI.weight
            for (let cont = 0; cont < respostaAPI.abilities.length; cont++){
                document.getElementById('ability').innerHTML += `<li>${respostaAPI.abilities[cont].ability.name}</li>`
            }
            var img = document.querySelector(".pokemonimage");
            img.setAttribute('src', respostaAPI.sprites.front_default);
        }
        req.send()

}