const frm = document.querySelector("form")

const resposta = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    const numero = frm.inNumero.value

    let raizQuadrada = Math.sqrt(numero)
    
    if(Number.isInteger(raizQuadrada)){
        resposta.innerText = `A raiz quadrada do número informado é ${raizQuadrada}`
        resposta.style.color = "blue"
    }
    else{
        resposta.innerText = `O ${numero} não tem raiz exata!`
        resposta.style.color = "red"
    }

    e.preventDefault()
})