const frm = document.querySelector("form")
const resposta1 = document.querySelector("h3")
const resposta2 = document.querySelector("h4")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const valor = Number(frm.inValor.value)

    if(valor <= 1.00){
        resposta1.innerText = `Valor Insuficiente!`
        return
    }

    let troco
    let tempo

    if(valor>= 1.00 && valor < 1.75){
        tempo = 30
        troco = valor - 1.00
    }
    else if(valor >= 1.75 && valor < 3.00){
        tempo = 60
        troco = valor - 1.75
    }
    else{
        tempo = 120
        troco = valor - 3.00
    }
    resposta1.innerText = `Tempo: ${tempo} minutos!`

    if(troco > 0){
        resposta2.innerText = `Troco R$: ${troco.toFixed(2)}`
    }
})