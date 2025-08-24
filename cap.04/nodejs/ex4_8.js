//Programa Farmácia

const prompt = require("prompt-sync")()
const valor = Number(prompt("Qual foi o valor da compra? "))

const aux = Math.floor(valor / 20) // 20 é o minimo que uma parcela pode ter

const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux // operador ternário substitui alguns if's

/* Operador Ternário substituiu essas linhas de código.
let parcelas 
if (aux == 0){
    parcelas = 1 
}
else if(aux > 6){
    parcelas = 6
}
else{
    parcelas = aux
}
*/

const valor_parcela = valor / parcelas

console.log(`Pode pagar em ${parcelas}x de R$: ${valor_parcela.toFixed(2)} reais`)

const numero_parcelas = Number(prompt("Em quantas parcelas deseja pagar? "))
let valorFinal 
if (numero_parcelas <= 6){
    valorFinal = valor / numero_parcelas
    console.log(`Você irá pagar ${numero_parcelas}x de R$: ${valorFinal.toFixed(2)} reais`)
}
else {
    console.log("Número de parcelas inválido!")
}
