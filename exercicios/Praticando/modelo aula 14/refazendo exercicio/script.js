function contar() {
    var resultado = document.getElementById('resultado')

    var inicio = document.getElementById('inicio').value
    if (inicio == "") {
        resultado.innerHTML = 'Impossível contar!'
        return;
    }

    var fim = document.getElementById('fim').value
    if (fim == "") {
        resultado.innerHTML = 'Impossível contar!'
        return;
    }

    var passo = document.getElementById('passo').value
    if (passo == 0 || passo == "") {
        window.alert('Passo inválido. Considerando Passo=1')
        passo = 1
    }

    resultado.innerHTML = "Contando:<br>"

    for (var i = Number(inicio); i <= Number(fim); i += Number(passo)) {
        resultado.append(`${i} 👉🏽`)
    }
    resultado.append(`🏴`)
}