const form = document.getElementById("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    alert("Você submeteu o formulário!")
})