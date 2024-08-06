const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Era uma vez, em uma cidade futurista, uma jovem chamada Ana que estava ansiosa para descobrir os mistérios da IA. Ela havia encontrado um antigo dispositivo que prometia ensinar tudo sobre o mundo das inteligências artificiais. Ao ativá-lo, o dispositivo começou a fazer perguntas, oferecendo caminhos diferentes baseados nas escolhas de Ana. Ana encontrou dois caminhos: um túnel escuro e uma escadaria iluminada.",
        alternativas: [
            {
                texto: "Túnel escuro",
                afirmacao: "A IA pode ser complexa e difícil de entender à primeira vista, mas explorar suas profundezas pode revelar maravilhas inimagináveis."
            },
            {
                texto: "Escadaria iluminada",
                afirmacao: "A IA também pode ser clara e fácil de utilizar, facilitando muitas tarefas do nosso dia a dia."
            }
        ]
    },
    {
        enunciado: "No final do caminho, Ana encontra um robô que lhe oferece duas opções: aprender sobre IA através de livros ou por meio de experiências práticas.",
        alternativas: [
            {
                texto: "Aprender pelos livros",
                afirmacao: "Aprender sobre IA através da teoria pode fornecer uma compreensão sólida dos fundamentos e princípios que regem essas tecnologias."
            },
            {
                texto: "Aprender pela prática",
                afirmacao: "Aprender na prática permite entender como a IA pode ser aplicada no mundo real, mostrando suas vantagens e desafios."
            }
        ]
    },
    {
        enunciado: "Após adquirir algum conhecimento, Ana é convidada a participar de um debate sobre o uso ético da IA. Ela pode optar por focar na privacidade dos dados ou na autonomia dos robôs.",
        alternativas: [
            {
                texto: "Privacidade dos dados",
                afirmacao: "A IA coleta e analisa grandes quantidades de dados, o que levanta preocupações sobre como essas informações são protegidas e utilizadas."
            },
            {
                texto: "Autonomia dos robôs",
                afirmacao: "Robôs autônomos levantam questões sobre as responsabilidades e limites da tomada de decisões sem intervenção humana."
            }
        ]
    },
    {
        enunciado: "Durante o debate, Ana percebe que há um projeto que usa IA para prever desastres naturais. Ela pode escolher apoiar ou criticar o projeto.",
        alternativas: [
            {
                texto: "Apoiar o projeto",
                afirmacao: "A IA pode ser uma ferramenta poderosa para prever desastres naturais e salvar vidas, mas depende de dados precisos e de uma implementação ética."
            },
            {
                texto: "Criticar o projeto",
                afirmacao: "A IA também pode falhar em suas previsões, levando a decisões equivocadas e a uma falsa sensação de segurança."
            }
        ]
    },
    {
        enunciado: "No final de sua jornada, Ana tem a oportunidade de desenvolver sua própria IA. Ela pode optar por criar uma IA para ajudar em diagnósticos médicos ou para melhorar a eficiência das cidades.",
        alternativas: [
            {
                texto: "Diagnósticos médicos",
                afirmacao: "A IA no campo da saúde pode revolucionar diagnósticos e tratamentos, mas precisa ser treinada cuidadosamente para evitar erros que possam custar vidas. Ao final de sua jornada, Ana refletiu sobre todas as possibilidades e responsabilidades envolvidas no desenvolvimento e uso da IA. Ela entendeu que, como qualquer ferramenta poderosa, a IA pode ser usada para o bem ou para o mal, dependendo de como é aplicada e das intenções de seus criadores."
            },
            {
                texto: "Melhorar a eficiência das cidades",
                afirmacao: "A IA pode otimizar recursos e serviços urbanos, tornando as cidades mais inteligentes e habitáveis, mas também levanta questões sobre vigilância e privacidade. Ao final de sua jornada, Ana refletiu sobre todas as possibilidades e responsabilidades envolvidas no desenvolvimento e uso da IA. Ela entendeu que, como qualquer ferramenta poderosa, a IA pode ser usada para o bem ou para o mal, dependendo de como é aplicada e das intenções de seus criadores."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
