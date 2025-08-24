const frm = document.querySelector("form")
const resposta = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const quilo = Number(frm.inQuilo.value)
    const consumo = Number(frm.inConsumo.value)

    const valor = (quilo / 1000) * consumo

    resposta.innerText = `O valor a pagar R$: ${valor.toFixed(2)} Reais!`

    e.preventDefault()
})