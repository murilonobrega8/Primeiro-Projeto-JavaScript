function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        // Pode usar for ou while
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` // Para saber qual usuário clicou na lista
            tab.appendChild(item)
            c++
        }
    }
}

function continuar() {
    window.location.href="page08-AnEle.html";
}

function encerrar() {
    window.location.assign("page99-Fim.html");
}

function voltar() {
    window.location.href="page06-Contador.html";
}