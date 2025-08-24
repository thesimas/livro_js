const frm = document.querySelector("form")
const resposta = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const numero = Number(frm.inNumero.value)
    if (numero < 2) {
        resposta.innerText = `${numero} Não é Primo!`;
        return; 

    }  

    let contadorDivisor = 0

    for(let x = 1; x <= numero; x++){
        if(numero % x == 0){
            contadorDivisor ++
            if(contadorDivisor > 2){
                break
            }
        }
    }


    if(contadorDivisor == 2){
        resposta.innerText = `${numero} é Primo!`
    }
    else{
        resposta.innerText = `${numero} Não é Primo!`
    }
})