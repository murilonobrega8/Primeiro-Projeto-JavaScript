let nas = document.querySelector('input#fnum')
let data = new Date()
let ano = data.getFullYear()
let res = document.querySelector('div#res')

function verificar() {
        let idade = (ano - nas.value)
        res.innerHTML = `Idade é ${idade} anos! `
        if (idade < 16) {
                res.innerHTML += `Idade abaixo da permitida para Votar!`
                res.style.background = "grey"
        } else if (idade >= 16 && idade < 18 || idade > 65) {
                res.innerHTML += `Idade definida para Voto Opcional!`
                res.style.background = "green"
        } else {
                res.innerHTML += `Idade definida para Voto OBRIGATÓRIO!`
                res.style.background = "red"
        }
}

function continuar() {
        window.location.href="page09-AnNum.html";
}

function encerrar() {
        window.location.assign("page99-Fim.html");
}

function voltar() {
        window.location.href="page7-Tabuada.html";
}