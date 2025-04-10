//forma clássica
function ExibirMsg (msg){
    console.log(msg)
}
ExibirMsg("Mensagem")
ExibirMsg("Isto é uma mensagem!")


function ExibirMsg2 (msg){
    let mensagem = msg
    return msg
}
console.log(ExibirMsg2("Pompeu é viado!"))

//forma deiferente de escrever uma função (Arrow Function)

const Potencia = (n, p) => {
    return Math.pow(n, p)
}
console.log(POtencia(8, 2))

const Media = (nota1, nota2) => {
    let NotaFinal = (nota1 + nota2)/2
    if (NotaFinal <= 4){
        return "Reprovado"
    }
    if (NotaFinal >=6){
        return "Aprovado"
    }
    return "Recuperação"
}