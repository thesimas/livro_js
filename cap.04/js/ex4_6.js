const frm = document.querySelector("form")
const resposta1 = document.querySelector("#outResposta1")
const resposta2 = document.querySelector("#outResposta2")
const resposta3 = document.querySelector("#outResposta3")


frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const saque = Number(frm.inValor.value)
    let nota_100
    let nota_50
    let nota_10

    if((saque%10) == 0){
        nota_100 = Math.floor(saque / 100) // saque / 100, vai resultar em um número inteiro, sem casas decimais e irá arrendondar para baixo - por causa do MATH.FLOOR 
        resto_100 = saque % 100
        nota_50 = Math.floor(resto_100 / 50)
        resto_50 = saque % 50
        nota_10 = Math.floor(resto_50/10)

        if (nota_100 > 0){
            resposta1.innerText = `Notas de R$ 100: ${nota_100}`
            resposta2.innerText = ""
            resposta3.innerText = ""
        }
        if (nota_50 > 0){
            resposta2.innerText = `Notas de R$ 50: ${nota_50}`
            resposta3.innerText = ""
        }
        if(nota_10 > 0){
            resposta3.innerText = `Notas de R$ 10: ${nota_10}`
        }
    }
    else{
        resposta1.innerText = `Valor inválido, só temos notas de 100, 50 e 10`
        resposta2.innerText = ""
        resposta3.innerText = ""
    }
})