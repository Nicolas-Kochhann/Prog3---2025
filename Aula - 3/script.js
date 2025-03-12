const form = document.getElementById("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    let nome = document.getElementById("nome").value;
    let formData = new FormData(this);
    let dados = Object.fromEntries(formData.entries());
    console.log(`${dados['nome']} tem ${dados['idade']} anos.`);

    let texto = document.getElementById("texto");
    //texto.textContent = `${dados['nome']} tem ${dados['idade']} anos.`

    if(formData.has("publico") && formData.has("privado")){
        texto.textContent = `${dados['nome']} vem das duas formas`;
    } else if (formData.has("publico")){
        texto.textContent = `${dados['nome']} vem de transporte público`;
    } else if (formData.has("privado")){
        `${dados['nome']} vem de transporte privado`;
    } else {
        texto.textContent = `${dados['nome']} não vem para a escola`;
    }
})

