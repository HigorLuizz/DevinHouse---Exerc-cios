let p = new Promise((resolve, reject) => {
    const verificaSePar = num => {
        if (num%2 == 0){
            return true
        }else{
            return false
        }
    
    }
    if(verificaSePar(2)){
        resolve("Esse numero é par")
    }else{
        reject("Esse número é impar")
    }
})
console.log(p)
p.then((message) => {
    console.log("Sucesso "+message)
}).catch((err) => {
    console.log("Inválido "+err)
})
