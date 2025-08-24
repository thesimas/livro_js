const frm = document.querySelector("form")
const resposta1 = document.querySelector("#outResposta1")
const resposta2 = document.querySelector("#outResposta2")

frm.addEventListener("submit", (e)=> {
    e.preventDefault()

    const ladoA = Number(frm.inLadoA.value)
    const ladoB = Number(frm.inLadoB.value)
    const ladoC = Number(frm.inLadoC.value)

    let situacao

    if (ladoA > (ladoB + ladoC)){
        situacao = false
    }else if (ladoB > (ladoA + ladoC)){
        situacao = false
    }
    else if (ladoC > (ladoA + ladoB)){
        situacao = false
    }else {
        situacao = true
    }

    let iguais

    if(situacao){
        
        if(ladoA == ladoB && ladoA == ladoC){
            iguais = "Equilátero(3 lados iguais)"
        }else if(ladoA == ladoB || ladoA == ladoC || ladoB == ladoC){
            iguais = "Isósceles(2 lados iguais)"
        }else{
            iguais = "Escaleno(3 lados diferentes)" 
        }
        resposta1.innerText = `Lados podem formar um triângulo`
        resposta2.innerText = `Tipo: ${iguais}`
    }else{
        resposta1.innerText = `Não é possivel formar um Triângulo\nPois tem um lado maior que a soma dos outros dois!`
        resposta2.innerText = ``
    }

})