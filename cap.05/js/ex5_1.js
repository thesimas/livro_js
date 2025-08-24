const frm = document.querySelector("form")
const respostaFinal = document.querySelector("pre")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const numero = Number(frm.inNumero.value)
    
    let resposta = "" //variaval do tipo string, para poder armazenar as strings que contem as repostas

    for(let x = 1; x <= 10; x ++){
        resposta += numero + " x " + x + " = " + (numero * x) + "\n"
        //resposta = `${resposta} ${numero} x ${x} = ${numero * x}\n`
    }

    respostaFinal.innerText = resposta
})