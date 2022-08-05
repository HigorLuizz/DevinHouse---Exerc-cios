let arrayQualquer = [0,6,9,5,8,4]
function verSeéPar(num){
    if(num % 2 ==0){
        return true
    }else{
        return false
    }
}
function verSeéImpar(num){
    if(num % 2==1){
        return true
    }else{
        return false
    }
}
function retornaArrayDeParesOuImpares(array =[], funcao){
    let arrayNovo = []
    for (const item of array) {
        if (funcao(item) == true){
            arrayNovo.push(item)
        }
    }
    return arrayNovo
}
console.log(retornaArrayDeParesOuImpares(arrayQualquer, verSeéImpar))