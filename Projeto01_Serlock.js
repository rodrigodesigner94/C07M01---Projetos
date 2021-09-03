const prompt = require('prompt-sync')();
console.log("Óla sou o detetive Rodrigo, você foi convocado(a) a responder algumas perguntas em relação a morte do Ted, conto com a sua colaboração para responder com  o digito 1 para SIM e o digito 0 para NÃO.")

console.log()
console.log()


let pergunta1 = +prompt('Telefonou para a vítima? ');
let pergunta2 = +prompt('Esteve no local do crime? ');
let pergunta3 = +prompt('Mora perto da vítima? ');
let pergunta4 = +prompt('Devia para a vítima? ');
let pergunta5 = +prompt('Já trabalhou para a vítima? ');

let compilado = pergunta1 + pergunta2 + pergunta3 + pergunta4 + pergunta5

console.log(compilado)


function avaliacao(sim,não){
if (compilado === 2){
  Console.log("Suspeito(a)")
}
else if (compilado === 3){
  console.log("Cumplice")
}
else if (compilado === 4){
  console.log("Cumplice")
  }
  else if (compilado === 5){
  console.log("Assasino(a)")
  } else{console.log("Inocente")}
}

avaliacao()
