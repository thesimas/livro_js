const frm = document.querySelector("form")
const resposta1 = document.querySelector("#outResposta1")
const resposta2 = document.querySelector("#outResposta2")

let valorTotal = 0
let contas = 0
let resposta = ""

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const descricao = frm.inDescricao.value
    const valor = Number(frm.inValor.value)

    contas ++ 

    valorTotal += valor
    resposta += `${descricao} - R$ ${valor.toFixed(2)}\n`

    resposta1.innerText = `${resposta} ------------------------------`
    resposta2.innerText = `${contas} Conta(s) - Total R$ ${valorTotal.toFixed(2)}`

    frm.inDescricao.value = ""
    frm.inValor.value = ""
    frm.inDescricao.focus()
})
