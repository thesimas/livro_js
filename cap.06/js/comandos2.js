const letras = ["A" , "B", "C", "D"]  // declara e define o conteudo do vetor inicial 
const letras2 = letras.slice(-2)    // obtém as 2 últimas letras
const letras3 = letras.slice(0 , 1)  // obtém do inicio até o final, exceto a última 

console.log(letras)     // [ 'A', 'B', 'C', 'D' ]
console.log(letras2)    //  [ 'C', 'D' ]
console.log(letras3)    // [ 'A' ]

const retira = letras.splice(2, 1) // remove a partir da posição 2, 1 elemento 

console.log(letras) // [ 'A', 'B', 'C', 'D' ]
console.log(retira) // [ 'C' ]


console.log(letras.join(" - "))
console.log(letras.toString())
console.log("*=" .repeat(40))

