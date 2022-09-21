var nome = window.prompt('Qual é seu nome?')
var país = window.prompt('Qual é seu país?')
var names = {name: nome, country: país}

alert('É um grande prazer em te receber aí do ' + names.country + ', ' + names.name + '!')

let a = window.document.querySelector('div#area')
a.addEventListener('click', clicar) 
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar() {
        a.innerText = 'Clicou!'
        a.style.background = 'red'
}

function entrar() {
        a.innerText = 'Entrou!'
}

function sair() {
        a.innerText = "Saiu!"
        a.style.background = 'green';
}

function continuar() {
        window.location.assign("page02-Nome.html");
}

function encerrar() {
        window.location.assign("page99-Fim.html");
}