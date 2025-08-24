const frm = document.querySelector("form")
const resposta = document.querySelector("h3")


frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const fruta = frm.inFruta.value
    const repeticao = Number(frm.inNumero.value)

    let juntarRepostas = ""

    for(let x = 1; x < repeticao; x ++){
        juntarRepostas = `${juntarRepostas}${fruta}*`
    }

    juntarRepostas = `${juntarRepostas}${fruta}`

    resposta.innerText = juntarRepostas
})