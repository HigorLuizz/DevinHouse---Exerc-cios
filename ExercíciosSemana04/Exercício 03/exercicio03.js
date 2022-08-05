class Pessoa {
    nome;
    idade;
    cpf;

    podeDirigir(){
        if (idade >=18){
            return true
        }else{
            return false
        }
    }
}
const UmaPessoa = new Pessoa()
UmaPessoa.nome = "Higor"
UmaPessoa.idade = 25
UmaPessoa.cpf = "456.654.851-93"

console.log(UmaPessoa)
console.log(UmaPessoa.podeDirigir())