function gerar() {
    
    let numero = document.getElementById('numero')
    let seletor = document.getElementById('seletor')

    
    if (numero.value.length == 0) {
        window.alert('Digite um número!')
    } else {
        let n = Number(numero.value)
        let c = 1
        seletor.innerHTML = ""
        while (c<= 10) {
            
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            seletor.appendChild(item)
            c++
        }
    }
    


   
}