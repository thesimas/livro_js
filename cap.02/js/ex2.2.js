// Cria referencia ao form e aos elementos h3 e h4 (respostas)

const frm = document.querySelector("form")
const resposta1 = document.querySelector("h3")
const resposta2 = document.querySelector("h4")

// Cria um "ouvinte" de evento, adcionado quando o botão submit for clicado
frm.addEventListener("submit" , (e) => {
    const titulo = frm.inTitulo.value // obtem o conteudo informado no titulo

    const duracao = Number(frm.inDuracao.value) 

    const horas = Math.floor(duracao / 60) //arredonda para baixo o resultado
    const minutos = duracao % 60

    resposta1.innerText = titulo
    resposta2.innerText = `${horas} Horas(s) e ${minutos} Minutos(s)`

    e.preventDefault() // evita envio de form
})