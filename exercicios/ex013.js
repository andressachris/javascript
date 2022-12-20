var agora = new Date()  /* new Date representa a hora atual do computador */
var hora = agora.getHours() /* getHours indica a quantidade de horas */
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa Noite!')
}