
const prompt = require("prompt-sync")()

console.log("Bem vindo ao sistema de Quadriênios")

const salario = Number(prompt("Salário Funcionário: "))
const tempo = Number(prompt("Tempo de Serviço Funcionário(anos): "))

const bonus = Math.floor(tempo / 4) //arredonda para baixo
const acrescimo = bonus / 100 // transforma o tempo em decimal
const salarioFinal = salario + (salario * acrescimo)

console.log(`Salário informado R$: ${salario}`)
console.log(`Tempo de serviço: ${tempo}`)
console.log(`Quadriênios: ${bonus}`)
console.log(`O salário final do funcionário é: ${salarioFinal.toFixed(2)}`)