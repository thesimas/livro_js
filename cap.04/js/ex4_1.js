const frm = document.querySelector("form")
const resposta = document.querySelector("h3")
const feedback = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value
    const nota1 = Number(frm.inNota1.value)
    const nota2 = Number(frm.inNota2.value)

    const media = (nota1 + nota2) / 2

    resposta.innerText = `A média do ${nome} é ${media.toFixed(1)}`
    if(media >= 7){
        feedback.innerText = `E está acima da média :)`
        feedback.style.color = "green"
    } else{
        feedback.innerText = `E está abaixo da média :(`
        feedback.style.color = "red"
    }
    e.preventDefault()
})