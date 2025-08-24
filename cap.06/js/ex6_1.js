const frm = document.querySelector("form")
const respNome = document.querySelector("span")
const respLista = document.querySelector("pre")

const pacientes = [] // declarando o vetor 

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const nome = frm.inPaciente.value // obtém o nome do paciente
    pacientes.push(nome)    // acionando o nome do paciente ao vetor PACIENTES.

})