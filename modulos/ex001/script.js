import c from './contatos.js'
const listaContatos = document.getElementById("listaContatos")
const btn_gravar = document.getElementById("btn_gravar")

btn_gravar.addEventListener("click", (evt) => {
    const cont = {
        nome: document.getElementById("inome").value,
        telefone: document.getElementById("itel").value,
        email: document.getElementById("iemail").value
    }
    c.addContato(cont, listaContatos)
    
})