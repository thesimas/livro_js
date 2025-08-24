const prompt = require("prompt-sync")() // adciona o pacote ao programa

const veiculo = prompt("Veículo: ")
const preco = Number(prompt("Preço R$: "))

const entrada = preco * 0.5
const parcela = entrada / 12

console.log(`Promoção > ${veiculo}`)
console.log(`Entrada de R$ ${entrada.toFixed(2)} Reias\n+12x de R$ ${parcela.toFixed(2)}`)