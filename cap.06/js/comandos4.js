// vetores de objetos 

const carros = []

carros.push({modelo: "Sandero", preco: 46500})
carros.push({modelo: "Palio", preco: 37800})

for(const carro of carros){
    console.log(`${carro.modelo} - R$: ${carro.preco}`)
}

console.log(carros) 

console.log("\n"+"*".repeat(40)+"\n")
// desestruturação e operador REST/Spread 

const carro = []

const modelo = "Fiesta"
const preco = 46800
carros.push({modelo, preco})

for(const carro of carros){
    const {modelo, preco} = carro // "DESESTRUTURA" objeto carro em modelo e preco
    console.log(`${modelo} - R$: ${preco}`)
}

const pacientes = ["Ana", "Carlos" , "Sofia"]
const [a, b, c] = pacientes
console.log(a) // Ana
console.log(b)  // carlos
console.log(c)  // sofia

console.log("\n"+"*".repeat(40)+"\n")

const pacientes2 = ["Ana", "Carlos", "João", "Verusca"]
const [atender, proximo, ...outros] = pacientes2

console.log(atender) // Ana
console.log(proximo)    // Carlos
console.log(outros)  // [ 'João', 'Verusca' ]

console.log("\n"+"*".repeat(40)+"\n")

const carro3 = {modelo: "Corsa", preco: 59500}
const carro4 = {...carro3, ano: 2020}
console.log(carro4)


