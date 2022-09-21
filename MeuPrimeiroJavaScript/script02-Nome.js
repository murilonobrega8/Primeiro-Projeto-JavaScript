let sobrenome = document.querySelector('input#txtnome')
var res = document.querySelector('div#res')

function analisar() {
        res.innerHTML = `Bem vindo(a), ${sobrenome.value}! Seu sobrenome tem ${sobrenome.value.length} letras. Escrito em maiúsculas dessa maneira (${sobrenome.value.toUpperCase()}) e em minúsculas dessa maneira (${sobrenome.value.toLowerCase()})!`
}

function continuar() {
        window.location.href="page03-Radar.html";
}

function encerrar() {
        window.location.assign("page99-Fim.html");
}

function voltar() {
        window.location.href="page01-Home.html";
}