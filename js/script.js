import { aleatorio, nome } from './aleatorio.js';
import { perguntas } from './perguntas.js';
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");
const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";
botaoIniciar.addEventListener('click', iniciaJogo);
function iniciaJogo() {
atual = 0;
historiaFinal = "";
telaInicial.style.display = 'none';
caixaPerguntas.classList.remove("mostrar");
caixaAlternativas.classList.remove("mostrar");
caixaResultado.classList.remove("mostrar");
mostraPergunta();
}
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
function mostraAlternativas() {
for (const alternativa of perguntaAtual.alternativas) {
const botaoAlternativas = document.createElement("button");
botaoAlternativas.textContent = alternativa.texto;
botaoAlternativas.addEventListener("click", () =>
respostaSelecionada(alternativa));
caixaAlternativas.appendChild(botaoAlternativas);
}
}
function respostaSelecionada(opcaoSelecionada) {
const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
historiaFinal += afirmacoes + " ";
if (opcaoSelecionada.proxima !== undefined) {
atual = opcaoSelecionada.proxima;
} else {
mostraResultado();
return;
}
mostraPergunta();
}

function mostraResultado() {
caixaPerguntas.textContent = `Em 2049, ${nome}`;
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
caixaResultado.classList.add("mostrar");
botaoJogarNovamente.addEventListener("click", jogaNovamente);
}
function jogaNovamente() {
atual = 0;
historiaFinal = "";
caixaResultado.classList.remove("mostrar");
mostraPergunta();
}
function substituiNome() {
for (const pergunta of perguntas) {
pergunta.enunciado = pergunta.enunciado.replace(/você/g, nome);
}
}
substituiNome();

Atualizando os códigos do HTML, clique no arquivo index.html e atualize
com o código abaixo:
Aqui as modificações serão somente onde está em negrito, com relação
ao seu projeto original.
<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-
scale=1.0">

<link rel="stylesheet" href="style.css">
<title>Você decide o futuro da IA</title>
</head>
<body>
<div class="caixa-principal">
<h1>Você decide o futuro da IA</h1>
<div class="tela-inicial">

<p>Novembro de 2022, a humanidade se viu em uma realidade
perturbadora.
De repente, percebemos que as máquinas evoluíram para
além do que imaginávamos.
Agora, elas escrevem e falam de um jeito tão parecido com
humanos que é quase impossível diferenciar
quem foi que escreveu ou falou o que.
Em meio a esse caos de identidade, uma missão surgiu.
Nosso objetivo: explorar o impacto da Inteligência
Artificial (IA) em nossas vidas e confrontar as
possibilidades que o futuro nos reserva.
O mundo nunca mais será o mesmo.
</p>
<button class="iniciar-btn">Iniciar</button>
</div>
<div class="caixa-perguntas"></div>
<div class="caixa-alternativas"></div>
<div class="caixa-resultado">
<p class="texto-resultado"></p>
<button class="novamente-btn">Jogar novamente</button>
</div>
</div>
<script type="module" src="js/aleatorio.js"></script>
<script type="module" src="js/perguntas.js"></script>
<script type="module" src="js/script.js"></script>
</body>
</html>