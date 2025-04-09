const CAMPO_IDADE = document.getElementById("idade")

CAMPO_IDADE.addEventListener("input", function(event){
    let idade = parseInt(event.target.value);
    let mensagem = "";


    if(!isNaN(idade)){
        mensagem = (idade >= 18)? "É maior de idade" : "Não é maior de idade";
    } else{
        mensagem = "Valor inválido";
    }

    document.getElementById("resposta_idade").textContent = mensagem;
    
})

const CALCULAR = document.getElementById("calcular");
const TABUADA = document.getElementById("tabuada");

CALCULAR.addEventListener("click", function(){
    let valor = parseInt(document.getElementById("valor").value)
    TABUADA.textContent = "";

    for(let i = 1; i <= 10; i++){
        mensagem = `${i} * ${valor} = ${i * valor}`;
        let li = document.createElement("li");
        li.textContent = mensagem;
        li.classList.add("blue");
        TABUADA.appendChild(li);
    }

})