const prompt = require("prompt-sync")()
const valorConta = Number(prompt("Valor da conta:  "))
const parcelas = Number(prompt("N° de Parcelas:  "))

const valorParcelas = Math.floor(valorConta / parcelas) // vai gerar um valor sem casas decimais. 
const parcelaFinal = valorParcelas + (valorConta % parcelas) // calcula a parcela final

for(let x = 1; x < parcelas; x++){
    console.log(`${x}° Parcela: R$ ${valorParcelas.toFixed(2)}`)
}

console.log(`${parcelas}° Parcela: R$ ${parcelaFinal.toFixed(2)}`)