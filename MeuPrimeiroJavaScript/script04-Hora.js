var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
let hora = data.getHours()
var diaSem = data.getDay()

function carregar() {
    carregarDia()
    if (hora >= 0 && hora < 12) {
        // BOM DIA 
        img.src = 'fotomanha.png' 
        document.body.style.background = '#f4e1bc' 
        msg.innerHTML += `Agora são ${hora} horas. BOM DIA! `
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE
        img.src = 'fototarde.png'
        document.body.style.background = '#b33d1c'
        msg.innerHTML += `Agora são ${hora} horas. BOA TARDE! `
    } else {
        // BOA NOITE
        img.src = 'fotonoite.png'
        document.body.style.background = '#073d4d'
        msg.innerHTML += `Agora são ${hora} horas. BOA NOITE! `
    }
}

function carregarDia() {
    let dia = ''
    switch(diaSem) {
        case 0:
            msg.innerHTML = 'Hoje é Domingo! '
            break
        case 1:
            msg.innerHTML = 'Hoje é Segunda! '
            break
        case 2:
            msg.innerHTML = 'Hoje é Terça! '
            break
        case 3:
            msg.innerHTML = 'Hoje é Quarta! '
            break
        case 4:
            msg.innerHTML = 'Hoje é Quinta! '
            break
        case 5:
            msg.innerHTML = 'Hoje é Sexta! '
            break
        case 6:
            msg.innerHTML = 'Hoje é Sábado! '
            brake
        default:
            msg.innerHTML = '[ERRO] Dia inválido! '
            break
    }
}

function mudarHora() {
    let nhora = document.querySelector('input#nhora')
    if (nhora.value.length == 0) {
        msg.innerHTML = 'Por favor preencha com um número de 0-24!'
    } else if (nhora.value < 0 || nhora.value > 24) {
        msg.innerHTML = 'Valor inválido. Digite entre 0-24!'
    } else {
        hora = nhora.value
        carregar()
    }
    
}

function horaOf() {
    hora = data.getHours()
    carregar()
}

function continuar() {
    window.location.href="page05-Idade.html";
}

function encerrar() {
    window.location.assign("page99-Fim.html");
}

function voltar() {
    window.location.href="page03-Radar.html";
}