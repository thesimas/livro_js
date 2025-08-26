const frm = document.querySelector("form")

const respErros = document.querySelector("#outErros")
const respChances = document.querySelector("#outChances")
const respDica = document.querySelector("#outDica")

const erros = []                  // vetor de escopo global com números já apostados
const sorteado = Math.floor(Math.random() * 100) + 1 // num aleatório entre 1 e 100
const CHANCES = 6                 // constante com o número máximo de chances 

frm.addEventListener("submit", (e)=> {
    e.preventDefault()
    const numero = frm.inNumero.value

    if (numero == sorteado){
        respDica.innerText = `Parabéns! Você acertou o número aleatório. Número Sorteado: ${sorteado}`
        frm.btSubmit.disabled = true
        frm.btNovo.className = "exibe"
    }else{
        if(erros.includes(numero)){
            alert(`Você já apostou o número ${numero}. Tente Outro...`)
        }else{
            erros.push(numero)   // adiciona o numero ao vetor erros
            const numErros = erros.length  //obtem o tamanho do vetor
            const numChances = CHANCES - numErros // calcula o n° de erros

            // exibe n° de erros, conteudo do vetor e n° de chances

            respErros.innerText = `${numErros} (${erros.join(", ")})`
            respChances.innerText = numChances
            if (numChances == 0){
                alert("Suas chances acabaram...")
                frm.btSubmit.disabled = true
                frm.btNovo.className = "exibe"
                respDica.innerText = `Game Over! O número aleatório era ${sorteado}`
            }else{
                //usar o operador ternário para mostrar a dica
                const dica = numero < sorteado ? "MAIOR" : "MENOR"

                respDica.innerText = `Dica: Tente um número ${dica} que ${numero}`
            }
         }
    }

    frm.inNumero.value = ""
    frm.inNumero.focus()
})

frm.btNovo.addEventListener("click", ()=>{
    location.reload() // recarrega a página
})