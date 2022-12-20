var idade = 68
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Você não vota.')
} else if (idade < 18 || idade > 65) {   /*Usa else if juntos porque não necessidade de criar outro bloco. Também não há necessidade de especificar que a idade menor tem que ser até 16, porque já está implícito no bloco anterior.*/
    console.log('Seu voto é opcional.')
} else {   /* Também não é necessário colocar aqui que a idade é maior que 18, porque nas outras já está implícito que se refere a menor que 18. */
    console.log('Seu voto é obrigatório.')
}