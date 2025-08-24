// cria referência ao form e ao elemento h3 (onde será exibida a resposta)
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value  // inNome é o id do input 
    // obtém o nome digitado no form
    resp.innerText = `Olá ${nome}` // exibe a resposta do programa
    e.preventDefault() // evita envio de form 
})

const cor = document.querySelector("#inCor") // primeiro elemento h3 da página 
const lista = document.querySelector(".lista") // elemento da class=lista

