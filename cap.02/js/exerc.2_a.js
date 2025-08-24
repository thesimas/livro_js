const frm = document.querySelector("form")
const resposta = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const descricao = frm.inMedicamento.value 
    const preco = Number(frm.inPreco.value)

    const valorPromocao = Math.floor(preco * 2)

    resposta.innerText = `Promoção de ${descricao}\nLeve 2 por apenas R${valorPromocao.toFixed(2)}`

    e.preventDefault()
    
})