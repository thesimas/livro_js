const frm = document.querySelector("form")
const resposta = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const numero = frm.inNumero.value

    let juntarNumeros = ""

    for(let x = numero; x>=1; x --){
        if(x == numero){
            juntarNumeros = "Entre 15 e 1: 15"
        }
        else{
            juntarNumeros = `${juntarNumeros}, ${x}`
        }
    }
    resposta.innerText = juntarNumeros
})