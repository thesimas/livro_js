const frm = document.querySelector("form")
const resposta = document.querySelector("h3")
const reposta2 = document.querySelector("h4")


frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const numero = Number(frm.inNumero.value)


    let acumulador = 0
    let juntaNumeros = ""

    for(let x = 1; x <= numero / 2; x++){
        if(numero % x == 0){
            juntaNumeros += `${x}, `
            acumulador += x 
        }
    }

    if(acumulador == numero){
        reposta2.innerText = `Divisores de ${numero}: ${juntaNumeros} (Soma: ${acumulador})`
        resposta.innerText = `${numero} é um número perfeito!`
    }else{
        reposta2.innerText = `Divisores de ${numero}: ${juntaNumeros} (Soma: ${acumulador})`
        resposta.innerText =`${numero} NÃO é um número perfeito!`
    }
})