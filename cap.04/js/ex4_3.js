const prompt = require("prompt-sync") ()

const bairro = prompt("Qual é o bairro de entrega?")

let taxaEntrega

switch (bairro){
    case "estreito":
        taxaEntrega = "10.00"
        break
    case "coqueiros":
        taxaEntrega = "6.00"
        break
    case "abraao":
        taxaEntrega = "3.00"
    case "centro":
        taxaEntrega = "15.00"
        break
    
    default:
        taxaEntrega = "20.00"
        break
}

console.log(`A taxa de entrega de acordo com o seu bairro é R$ ${taxaEntrega} `)