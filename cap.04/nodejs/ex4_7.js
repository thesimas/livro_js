// Programa Pescaria

const prompt = require("prompt-sync")()
const pessoas = Number(prompt("Quantas pessoas foram ao clube?  "))
const peixes = Number(prompt("Quantos peixes vocês levaram?  "))

console.log(`${pessoas} pessoas levaram ${peixes} peixes!`)

let pagar // let é um tipo de variavel que pode mudar o seu valor
let resto 

if(peixes <= pessoas){
    pagar = pessoas * 20
}
else{
    resto = (peixes % pessoas) * 12 
    pagar =(pessoas * 20) + resto
    console.log("Terão que pagar um adcional!")
}

console.log(`O total a pagar é R$: ${pagar.toFixed(2)}` )