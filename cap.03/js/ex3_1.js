const prompt = require("prompt-sync") () //adciona pacote para a entrada de dados 
const num1 = Number(prompt("1° Número: ")) // lê os numeros
const num2 = Number(prompt("2° Número: ")) // lê os numeros

const soma = num1 + num2    // realiza o calculo

console.log(`A soma é: ${soma}`) //exibe o resultado