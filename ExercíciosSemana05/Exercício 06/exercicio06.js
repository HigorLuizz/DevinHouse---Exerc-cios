const imprimirTabuada = (numero, contador) => {
    for (let cont = 1; cont <= contador; cont++) {
        console.log(numero+" X "+cont+" = "+numero*cont)  
    }
}

const tabuadaAte = (contador, funcaoDeImprimirTabuada) => {
    return funcaoDeImprimirTabuada(numero,contador)
}
console.log(tabuadaAte(4,imprimirTabuada(7,contador)))