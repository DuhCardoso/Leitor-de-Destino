

const respostaElement = document.querySelector("#resposta");
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPergunta = document.querySelector('#buttonPerguntar')
const respostas =[
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
]

// clicando em "fazer pergunta"

function fazerPergunta(){
    respostaElement.style.opacity = 1
    
    if(inputPergunta.value == ""){
        respostaElement.innerHTML = "Preciso de uma pergunta!"
        return
    }
    
    buttonPergunta.setAttribute('disabled', true)

    const pergunta = "<div>" + inputPergunta.value + "</div>";

    // Gerador de numero aleatorio
    const totalRespostas = respostas.length
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas)


    respostaElement.innerHTML = pergunta + respostas[numeroAleatorio]

    // sumindo com a resposta:
    setTimeout(function(){
        respostaElement.style.opacity = 0
        buttonPergunta.removeAttribute('disabled')
    }, 3000)
}


