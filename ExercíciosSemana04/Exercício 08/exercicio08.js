class Serie{
    nome;
    qttTemporadas;
    anoDeLancamento;

    constructor(nome, qttTemporadas, anoDeLancamento){
        this.nome = nome;
        this.qttTemporadas = qttTemporadas;
        this.anoDeLancamento = anoDeLancamento;
    }
}
var series = []
var menor = 2100;
var nomeMenor;
for (let cont =0; cont < 4;cont++){
    series[cont] = new Serie(window.prompt("Qual nome da série?"),
    parseInt(window.prompt("Quantas temporadas tem?")),
    parseInt(window.prompt("Qual o ano de lançamento?")))
    console.log(series[cont])
    if (series[cont].anoDeLancamento < menor){
        menor = series[cont].anoDeLancamento
        nomeMenor = series[cont].nome
    }
}
console.log(menor)
console.log(nomeMenor)
const texto1 = document.getElementById("textos")
texto1.innerHTML = "<h3>A série que foi lançada primeiro foi "+nomeMenor+" no ano de "+menor+"</h3>"