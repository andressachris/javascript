const form = document.querySelector('.formulario');

form.addEventListener('submit', function(evento) {
evento.preventDefault();
});

function calcular() {
    const pesoUsuario = Number(document.querySelector('#pesoUsuario').value);
    const alturaUsuario = Number(document.querySelector('#alturaUsuario').value);

    const indiceDeMassaCorporalUsuario = (pesoUsuario / (alturaUsuario ** 2)).toFixed(2);

    if (indiceDeMassaCorporalUsuario < 18.5) {
        resultado.innerHTML = `<span>Seu IMC é ${indiceDeMassaCorporalUsuario} (Abaixo do peso)</span>`
    } else if (indiceDeMassaCorporalUsuario >= 18.5 && indiceDeMassaCorporalUsuario <= 24.9) {
        resultado.innerHTML = `<span>Seu IMC é ${indiceDeMassaCorporalUsuario} (Peso normal)</span>`
    } else if (indiceDeMassaCorporalUsuario >= 25 && indiceDeMassaCorporalUsuario <= 29.9) {
        resultado.innerHTML = `<span>Seu IMC é ${indiceDeMassaCorporalUsuario} (Sobrepeso)</span>`
    } else if (indiceDeMassaCorporalUsuario >= 30 && indiceDeMassaCorporalUsuario <= 34.9) {
        resultado.innerHTML = `<span>Seu IMC é ${indiceDeMassaCorporalUsuario} (Obesidade grau 1)</span>`
    } else if (indiceDeMassaCorporalUsuario >= 35 && indiceDeMassaCorporalUsuario <= 39.9) {
        resultado.innerHTML = `<span>Seu IMC é ${indiceDeMassaCorporalUsuario} (Obesidade grau 2)</span>`
    } else if (indiceDeMassaCorporalUsuario >= 40) {
        resultado.innerHTML = `<span>Seu IMC é ${indiceDeMassaCorporalUsuario} (Obesidade grau 3)</span>`
    } else if (pesoUsuario == '' || !pesoUsuario) {
        resultado.innerHTML = `<span class=campo-vazio>Peso inválido</span>`
        return;
    } else if (alturaUsuario == '' || !alturaUsuario) {
        resultado.innerHTML = `<span class=campo-vazio>Altura inválida</span>`
        return;
    }
}