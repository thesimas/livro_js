const frm = document.querySelector("form")
const resposta = document.querySelector("pre")


frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    
    const numero = Number(frm.inNumero.value)
    const ano = Number(frm.inAno.value)

    if (numero < 2){
        resposta.innerText = "O número de Chinchilas deve ser no mínimo 2(casal)!"
        frm.inNumero.focus()
        return
    }

    let juntarRespostas = ""
    let acumuladora = numero

    for(let x = 1; x <= ano; x++){
        
        juntarRespostas += `${x}° ano: ${acumuladora} Chinchilas\n`
        acumuladora *= 3
    }

    resposta.innerText = juntarRespostas

})