function retornaAquantidadeDeParesEimparesDigitados (lista = []){
    var contPar = 0;
    var contImpar = 0;
    for (let pos in lista){
        if (lista[pos] % 2 == 0){
            contPar++
        }else{
            contImpar++
        }
    }
    return [contPar,contImpar,lista.length];
}
var par = retornaAquantidadeDeParesEimparesDigitados([0,1,3,6,5,9,7])[0]
var impar = retornaAquantidadeDeParesEimparesDigitados([0,1,3,6,5,9,7])[1]
var tamanho = retornaAquantidadeDeParesEimparesDigitados([0,1,3,6,5,9,7])[2]
console.log("A quantidade de número é de "+tamanho+", sendo "+par+" pares e "+impar+" impares.")
