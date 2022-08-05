var informarParOuImpar = function(numero){
    if (numero % 2 == 0){
      return "Esse número é par"
    }else if (numero % 2 == 1){
      return "Esse número é impar"
    }else{
      return "Inválido"
    }
  }
  console.log(informarParOuImpar())
