const frm = document.querySelector("form")
const resposta1 = document.querySelector("#outResposta1")
const resposta2 = document.querySelector("#outResposta2")
const resposta3 = document.querySelector("#outResposta3")

frm.addEventListener("submit" , (e) => {
    const veiculo = frm.inVeiculo.value
    const preco = Number(frm.inPreco.value)

    const entrada = preco * 0.50 //equivale a 50% do valor total do carro
    const parcela = entrada / 12 
    
    resposta1.innerText = `Promoção: ${veiculo}` 
    resposta2.innerText = `Entrada: ${entrada.toFixed(2)}`
    resposta3.innerText = `+ 12x de R$ ${parcela.toFixed(2)}`

    e.preventDefault()

})