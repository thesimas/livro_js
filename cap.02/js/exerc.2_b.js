const frm = document.querySelector("form")
const resposta = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const valor = Number(frm.inValor.value)
    const tempo = Number(frm.inTempo.value)

    const precoFinal = Math.ceil(tempo / 15)* valor

    resposta.innerText = `Valor a Pagar R$: ${precoFinal.toFixed(2)} Reais`

    e.preventDefault()
})