let valores = [9, 2, 7, 4, 0]

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

console.log(valores.indexOf(7))

let num = valores.indexOf(7)
if (num == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${num}`)
} 