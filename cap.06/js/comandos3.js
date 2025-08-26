const idades = [5, 6, 8, 3, 6, 9]

console.log(idades.indexOf(6)) // retorna 1 é a posição do index
console.log(idades.lastIndexOf(6)) // retorna 4 
console.log(idades.indexOf(7)) // retorna -1 pois não tem esse valor no vetor 

console.log(idades.includes(3)) //  retorna true, includes retona um valor booleano caso o elemento contenha no vetor