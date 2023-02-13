let formulario = document.querySelector(".form")
formulario.addEventListener("submit",(e)=>{
    e.preventDefault()
    let nome = document.querySelector('#nome').value;
    let email = document.querySelector('#email').value;
    let telefone = parseInt(document.querySelector('#telefone').value);
    
    console.log("Nome completo: " + nome)
    console.log("E-mail: " + email)
    console.log("Telefone: " + telefone)
    
    alert("Cadastro feito com sucesso !")

    formulario.reset()
})
