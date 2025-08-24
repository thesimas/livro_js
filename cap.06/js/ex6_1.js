const frm = document.querySelector("form")
const respNome = document.querySelector("span")
const respLista = document.querySelector("pre")

const pacientes = [] // declarando o vetor 

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const nome = frm.inPaciente.value // obtém o nome do paciente
    pacientes.push(nome)    // acionando o nome do paciente ao vetor PACIENTES.

    let lista = ""
    for(let i = 0; i < pacientes.length; i ++){
        lista += `${i+1}° Paciente: ${pacientes[i]} \n`
    }
    respLista.innerText = lista
    frm.inPaciente.value = ""
    frm.inPaciente.focus()
})

frm.btUrgencia.addEventListener("click", () =>{
    // verifica se as validações do form estão ok (no caso, paciente is required)

    if(!frm.checkValidity()){
        alert("Informe o nome do paciente a ser atendido em caráter de Urgência")
        frm.inPaciente.focus()
        return
    }
    const nome = frm.inPaciente.value
    pacientes.unshift(nome) // adciona o paciente no inicio do vetor

    let lista = ""
    // forEach aplicado sobre o array pacientes
    pacientes.forEach((paciente, i) => {
        lista += `${i+1}. ${paciente}\n`
    })

    respLista.innerText = lista
    frm.inPaciente.value = ""
    frm.inPaciente.focus()
})

frm.btAtender.addEventListener("click" , () =>{
    // se o tamenho do vetor == 0

    if(pacientes.length == 0){
        alert("Não há pacientes na lista de espera!")
        frm.inPaciente.focus()
        return
    }

    const atender = pacientes.shift() // remove do inicio da fila (e obtém o nome)
    respNome.innerText = atender
    let lista = ""
    pacientes.forEach((paciente, i) => (lista += `${i +1}. ${paciente}\n`))
     
    respLista.innerText = lista
    frm.inPaciente.value = ""
    

})