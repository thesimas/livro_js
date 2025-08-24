const cidades = ["Pelotas"]  // declara e define o conteudo do vetor inicial 
console.log(cidades)

cidades.push("São Lourenço")  // adciona uma cidade no final do vetor 
console.log(cidades)    // ["Pelotas" , "São Lourenço"]

cidades.unshift("Porto Alegre") // adciona ao inicio e desloca os demais para uma posição adiante
console.log(cidades)    // ["Porto Alegre" , "Pelotas" , "São Lourenço"]

for(const cidade of cidades) {
    console.log(cidade)
}

cidades.forEach((cidade, i) =>{
    console.log(`${i+1}ª Cidade: ${cidade}`)
})

const ultima = cidades.pop() // remove a ultima cidade do vetor 
console.log(cidades)    // ["Porto Alegre" , "Pelotas"]

const primeira = cidades.shift() // remove a primeira cidade do vetor e "sobe" as demais
console.log(cidades)    // ["Pelotas"]

