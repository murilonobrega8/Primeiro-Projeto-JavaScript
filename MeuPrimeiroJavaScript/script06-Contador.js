function contar() {
    var ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.querySelector('div#res') // Ou igual aos outros de cima

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
        res.innerHTML = ('Impossível contar! Um dos valores está vazio!')
        //alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = (`Contando: <br>`)
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        if (i < f) {
            // Contagem crescente
            if (p <= 0 || p > f) {
                window.alert('Passo inválido! Considerando Passo = 1!')
                p = 1
            }
            for(let/* ou var*/ c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} ` // Pega código do emoji no Google e tira o 'U-' e troca por `\u{código}` *só funciona entre crases
            }   
        } else {
            // Contagem Regressiva
            if (p <= 0 || p > i) {
                window.alert('Passo inválido! Considerando Passo = 1!')
                p = 1
            }
            for(let c = i; c>= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1} `
    }
}

function continuar() {
    window.location.href="page07-Tabuada.html";
}

function encerrar() {
    window.location.assign("page99-Fim.html");
}

function voltar() {
    window.location.href="page05-Idade.html";
}