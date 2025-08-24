// Programa Inverte Centena

const prompt = require("prompt-sync")() 
const numero = Number(prompt("Me informe um número: "))

if (numero < 100 || numero >= 1000){
    console.log("Este número não é uma centena!")
    return
}

let resto

const primeiro = Math.floor(numero / 100)

resto = numero % 100

const segundo = Math.floor(resto / 10)

const terceiro = resto % 10

console.log(`O inverso do centenário informado é: ${terceiro} ${segundo} ${primeiro}`)
console.log(`O centenário informado foi: ${primeiro} ${segundo} ${terceiro}`)