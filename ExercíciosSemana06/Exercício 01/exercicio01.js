var nome = window.prompt("qual seu nome?")
var sobrenome = window.prompt("qual seu sobrenome?")
var idade = parseInt(window.prompt("Qual sua idade?"))

console.log(`Meu nome é ${nome}, meu sobrenome é ${sobrenome}, tenho ${idade} e nasci em ${ new Date().getFullYear()-idade}`)