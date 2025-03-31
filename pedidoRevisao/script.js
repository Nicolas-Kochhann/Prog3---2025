const FORM = document.getElementById("formID")
FORM.addEventListener("submit", function(event){
    event.preventDefault();

    const FORMDATA = new FormData(this);
    let dados = Object.fromEntries(FORMDATA.entries())
    let valorTotal = 0;
    console.log(dados)
    
    switch(dados["tamanho"]){
        case "P":
            valorTotal += 10;
            break;

        case "M":
            valorTotal += 15;
            break;

        case "G":
            valorTotal += 20;
            break;
    }

    const CALABRESA = 3.50;
    const QUEIJO = 4;
    const MORANGO = 8;
    if (FORMDATA.has("calabresa")){
        valorTotal += CALABRESA;
    }
    
    if (FORMDATA.has("queijo")){
        valorTotal += QUEIJO;
    }

    if (FORMDATA.has("morango")){
        valorTotal += MORANGO;
    }

    let quantidade = document.getElementById("quantidade").value;
    valorTotal = valorTotal * quantidade;

    let valorEntrega = 5;
    if (dados["formaEntrega"] == "entrega"){
        valorTotal += 5;
    }

    let calculo = document.getElementById("calculo");
    calculo.textContent = `Valor total: ${valorTotal}`;

    });