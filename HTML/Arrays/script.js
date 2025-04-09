
const TAREFAS = []; 

const FORMULARIO = document.getElementById("formulario");
const LISTA_TAREFAS = document.getElementById("tarefas");

FORMULARIO.addEventListener("submit", (event) => {
    event.preventDefault();                                                     // Trocando comportamento padrão de formulário (submit)
    let tarefa = document.getElementById("tarefa").value;
    document.getElementById("tarefa").value = "";                              // Reset do valor do input text

    LISTA_TAREFAS.textContent = "";

    TAREFAS.push(tarefa);
    TAREFAS.forEach(element => {
        let li = document.createElement("li");
        li.textContent = element;
        LISTA_TAREFAS.appendChild(li);
    });
})