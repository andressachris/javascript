function contar() {
    var resultado = document.getElementById('resultado')

    var txtinicio = document.getElementById('txtinicio').value
    if (txtinicio == "") {
        resultado.innerHTML = 'Impossível contar!'
        return;
    }

    var txtfim = document.getElementById('txtfim').value
    if (txtfim == "" || txtfim < 1) {
        resultado.innerHTML = 'Impossível contar!'
        return;
    }

    let txtpasso = document.getElementById('txtpasso').value
    if (txtpasso == 0 || txtpasso == "") {
        window.alert('Passo inválido. Considerando PASSO 1.')
        txtpasso = 1
    }

    resultado.innerHTML = "Contando: <br>"

    for (var i = Number(txtinicio); i <= Number(txtfim); i = i + Number(txtpasso)) {
        resultado.append(` ${i} 👉`)
    }

    resultado.append("🏴")
}