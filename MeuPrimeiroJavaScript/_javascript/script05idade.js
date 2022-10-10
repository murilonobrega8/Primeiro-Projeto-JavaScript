function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res') // Poderia ser tbm var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano || Number(fano.value) < 0) { // as duas formas de fano estão corretas
        alert(`[ERRO] Verifique os dados e tente novamente!`)
    } else {
        var fsex = document.getElementsByName('radsex') // [0]-Masculino e [1]-Feminino
        var idade = ano - Number(fano.value)
        var gênero = '' // JavaScript permite variáveis com acentos e especiais
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 4) {
                // Bebê
                img.setAttribute('src', '_images/foto-bebe-m.png')
            } else if (idade < 12) {
                // Criança
                img.setAttribute('src', '_images/foto-crianca-m.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', '_images/foto-jovem-m.png')
            } else if (idade < 65) {
                // Adulto
                img.setAttribute('src', '_images/foto-adulto-m.png')
            } else {
                // Idoso
                img.setAttribute('src', '_images/foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 4) {
                // Bebê
                img.setAttribute('src', '_images/foto-bebe-f.png')
            } else if (idade < 12) {
                // Criança
                img.setAttribute('src', '_images/foto-crianca-f.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', '_images/foto-jovem-f.png')
            } else if (idade < 65) {
                // Adulto
                img.setAttribute('src', '_images/foto-adulto-f.png')
            } else {
                // Idoso
                img.setAttribute('src', '_images/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos!`
        res.appendChild(img)
    }
}

function continuar() {
    window.location.href="page06contador.html";
}

function encerrar() {
    window.location.assign("page99fim.html");
}

function voltar() {
    window.location.href="page04hora.html";
}