const frm = document.querySelector("form")
const resposta = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const numero = Number(frm.inNumero.value)

    let estrelas = ""

    for(let x = 1; x <= numero; x++){
        if(x % 2 == 1){
            estrelas = `${estrelas}*`
        }else{
            estrelas = `${estrelas}-`
        }
    }

    resposta.innerText = estrelas 

})