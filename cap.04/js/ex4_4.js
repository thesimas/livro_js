const frm = document.querySelector("form")
const resposta = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    const horaBrazil = Number(frm.inHora.value)

    let fuso = (horaBrazil + 5)

    if (fuso > 24){
       fuso -= 24
    }
    
    resposta.innerText = `Hora na França: ${fuso.toFixed(2)}` 

    e.preventDefault()
})