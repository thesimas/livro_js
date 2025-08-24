const prompt = require("prompt-sync")()

console.log("Veterinária JS")

const pesoKg = Number(prompt("Me informe o peso da Ração(KG): "))
const consumo = Number(prompt("Me informe o consumo diário(GR): "))

const conversaoKg = (pesoKg * 1000)
const diasConsumo = Math.floor(conversaoKg / consumo) 
const sobra = conversaoKg % consumo

console.log(`Peso da ração(KG): ${pesoKg} Kilo`)
console.log(`Consumo diário(GR): ${consumo} Gramas `)
console.log(`Seu gato irá consumir por: ${diasConsumo} dias.`)
console.log(`Irá sobrar: ${sobra} gramas`)