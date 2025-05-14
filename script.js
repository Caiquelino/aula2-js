// let nome = prompt("qual é o seu nome?")

// let idade = prompt("quantos anos você tem?")

// alert(`Olá, ${nome}! você tem ${idade} anos!`)

// confirm()

// let resposta = confirm("você tem certeza que deseja sair?")
// console.log(resposta)

//segundo exercicio

// const nomeDoUsuario = prompt("Qual é o seu nome?")
// const profissaoDoUsuario = prompt("Qual é a sua profissão?")

// alert(`Olá, ${nomeDoUsuario}! que interessante saber que você trabalha com ${profissaoDoUsuario}.`)

//terceiro exercicio

// let idade = 18
// if ( idade >=18) {
//     console.log("você é maior de idade")
// }

//quarto exercicio

// let nota = 75

// if (nota >= 90){
//     console.log("Aprovado com excelência.")
// } else if (nota>= 60) {
//     console.log("Aprovado.")
// } else {
//     console.log("Reprovado.")
// }

// quinto exercicio

// let nomeDoUsuario = prompt("qual é o seu nome?")
// let idade = prompt("qual é a sua idade?")

// if (idade>= 18) {
//  alert(`Olá, ${nomeDoUsuario}! você pode dirigir`)
// }

// else{
//     alert(` ${nomeDoUsuario}! Você não pode dirigir`)
// }

// sexto exercicio

let temperaturaDoLocal = prompt("qual é a temperatura?")

if (temperaturaDoLocal> 35) {
 alert("Calor Extremo")
}

else if (temperaturaDoLocal >= 25 && temperaturaDoLocal <= 35){
    alert("Clima quente")
}

else if (temperaturaDoLocal >= 15 && temperaturaDoLocal <= 24){
    alert("Clima agradável")
}

else if (temperaturaDoLocal >= 5 && temperaturaDoLocal <= 14){
    alert("Clima frio")
}

else {
    alert("Frio intenso")
}



