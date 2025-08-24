const frm = document.querySelector("form")
const resposta1 = document.querySelector("#resposta1")
const resposta2 = document.querySelector("#resposta2")

frm.addEventListener("submit" , (e) =>{
    const produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)

    const desconto = preco / 2
    const promocao = preco * 3 - desconto

    resposta1.innerText = `${produto} - Promoção: Leve 3 por ${promocao.toFixed(2)}`

    resposta2.innerText = `O 3° Produto custa apenas R$: ${desconto.toFixed(2)}`

    e.preventDefault()
})