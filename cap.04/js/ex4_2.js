const frm = document.querySelector("form")
const resposta = document.querySelector("h3")

frm.addEventListener("submit" , (e) => {
    const nome = frm.inNome.value
    const masculino = frm.inMasculino.checked // forma de obter o valor do tipo de input radio. "checked"

    const altura = Number(frm.inAltura.value)

    let peso 

    if (masculino){
        peso = 22 * Math.pow(altura, 2)
    }else{
        peso = 21 * Math.pow(altura, 2)
    }

    resposta.innerText = `O peso ideal do ${nome} é: ${peso.toFixed(3)} Kg`

    e.preventDefault()

})

frm.addEventListener("reset", () => {
    resposta.innerText = ""
})