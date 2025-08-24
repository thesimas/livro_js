
const prompt = require("prompt-sync") ()

const produto = prompt("Produto:  ")
const etiquetas = Number(prompt("N° de Etiquetas:  "))

for(let x = 1; x <= etiquetas / 2; x ++){
    console.log(`${produto.padEnd(15)} ${produto.padEnd(15)}`)
}

if (etiquetas % 2 == 1){
    console.log(produto)
}
