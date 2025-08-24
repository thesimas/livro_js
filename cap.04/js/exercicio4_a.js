const frm = document.querySelector("form")
const resposta = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const numero = frm.inNumero.value

    const verificador = numero % 2 == 0 ? `${numero} é Pár` : `${numero} é Ímpar`
   
    resposta.innerText = verificador
    /*
    if(numero % 2 == 0){
        resposta.innerText = `${numero} é Pár`
    }
    else{
        resposta.innerText = `${numero} é Ímpar`
    }
    */
})