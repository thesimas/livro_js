const frm = document.querySelector("form")
const resposta = document.querySelector("h3")

frm.addEventListener("submit" , (e) =>{
    e.preventDefault()

    const permitida = Number(frm.inPermitida.value)
    const condutor = Number(frm.inCondutor.value)

    const limite_medio = permitida * 0.20
    const difenca = condutor - permitida

    const situacao = permitida >= condutor ? `Situação: Sem Multa` : (permitida * 0.20) >= difenca ? `Situação: Multa Leve` : `Situação: Multa Grave`

    resposta.innerText = (situacao)
    
    /*
    if(permitida >= condutor){
        resposta.innerText = `Situação: Sem Multa`
    }
    else if(limite_medio >= difenca){
        resposta.innerText = `Situação: Multa Leve`
    }
    else{
        resposta.innerText = `Situação: Multa Grave`
    }
    */
})