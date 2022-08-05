function mostraOsElementoDoArrayEseuTamanho (lista=[]){
    for (var pos in lista){
      console.log(lista[pos])
    }
    return console.log("O tamanho da lista é:"+lista.length)
  
    }
    mostraOsElementoDoArrayEseuTamanho([1,6,22,5,9,65,88])