let arrayAlunos = [
    {
        nome: "Carlos",
        media: 7
    },
    {
        nome: "Julia",
        media: 8
    },
    {
        nome: "Rayane",
        media: 8
    },
    {
        nome: "Arthur",
        media: 9
    }
]
document.write("<h2>Os alunos que ficaram em recuperação foram: </h2>")
var cont = 0;
arrayAlunos.forEach((aluno, index) =>{
    if (aluno.media < 7){
        cont++
        document.write("<h2>"+aluno.nome+"</h2>")
    }
})
if (cont == 0){
    document.write("<h2>Nenhum!</h2>")
    document.write("<h2>Parabens a todos da turma, todos foram aprovados</h2>")
}