const ANSWERS = [`A principal função do HTML é marcar os elementos dentro de uma página web para que ela possa ser 
organizada e estruturada de uma forma específica, tendo cada elemento disposto e carregado exatamente
onde ele precisa estar de acordo com a marcação que ele recebeu.`,

    `<img src="foto.png" alt="Descrição da imagem">. Se estiver numa pasta diferente, como "imagens/",
 o código seria: <img src="imagens/foto.png" alt="Descrição da imagem">`,

    `_blank: Abre o link em uma nova janela/aba
_self: Abre o link no mesmo frame (padrão)
_parent: Abre o link no frame pai
_top: Abre o link no corpo completo da janela`,

    `A tag <div> geralmente é utilizada para criar uma divisão ou uma seção em um documento HTML.
<div> é um elemento de bloco (ocupa toda a largura disponível e cria uma nova linha)\n A etiqueta <span> geralmente é usada para agrupar elementos em linha em um documento.
<span> é um elemento inline (ocupa apenas o espaço necessário e não cria nova linha)`,

    `As tags semânticas em HTML são tags que fornecem significado estrutural ao conteúdo de uma página web.
Semântica em HTML refere-se ao uso de tags que descrevem corretamente o significado do conteúdo, não apenas 
sua aparência. Exemplos: <header>, <footer>, <article>, <section>, <nav>, <main>, <aside>, <figure>, <figcaption>, <time>.`,

    `O valor padrão é get, que envia os dados do formulário como parâmetros na URL. 
A alternativa é post, que envia os dados no corpo da requisição HTTP.`,

    `A principal função do CSS é estilizar elementos HTML, controlando sua aparência, layout e design.`,

    `Permite reutilizar o mesmo estilo em várias páginas, facilita a manutenção, melhora o desempenho (cache do navegador) 
e separa conteúdo (HTML) de apresentação (CSS).`,

    `<link rel="stylesheet" href="nome_do_arquivo.css">`,

    `A propriedade color especifica a cor do texto`,

    `class pode ser aplicada a múltiplos elementos e um elemento pode ter várias classes
id deve ser único na página e um elemento só pode ter um id
Sempre que você precisar aplicar 1 estilo para muitos elementos, utiliza-se a classe. 
Caso você queira mudar somente um único elemento e somente ele, utiliza-se o id.`,

    `O box-model é o modelo que define como os elementos HTML são renderizados, consistindo em: 
conteúdo (content), preenchimento (padding), borda (border) e margem (margin). 
Essas propriedades determinam o espaço que um elemento ocupa.`,

    `o Java é usado para construir aplicações que são executadas em um ambiente de máquina virtual 
que permite portabilidade entre diferentes sistemas operacionais;
o JavaScript é usado para tornar as páginas da web mais interativas e dinâmicas, 
além de ter capacidades de desenvolvimento no lado do servidor.`,
    `<script src="script.js" defer></script>`,

    `let numero = parseInt("123");
    // Ou para números decimais:
    let decimal = parseFloat("123.45");
    // Método moderno:
    let numero2 = Number("123");`,

    `Podemos dizer que os eventos em JavaScript são ações que ocorrem no navegador, como um clique do mouse,
 o pressionamento de alguma tecla ou até mesmo o carregamento de uma página. Tais ações podem ser 
capturadas pelo navegador e manipuladas para garantir uma interação mais dinâmica com a página web.`,

    `método que permite executar uma função para cada item de um array`,

    `Arrow functions (ou funções lambda em algumas linguagens) são funções anonimas (ou seja, funções sem nome) representadas no JS como "(parametros) => {código a ser executado}"
     que servem para definir uma função que só necessita ser chamada uma única vez.`]



const cards = document.querySelectorAll(".flashcard");
console.log(cards);

cards.forEach(card => card.addEventListener("click", (event) => {

    let question = card.textContent;

    for (let i = 0; i < cards.length; i++){
        if (card.id == i){
           card.textContent = ANSWERS[i];
        }
    }

    card.addEventListener("click", () => {
        card.textContent = question;
    })
    
}))