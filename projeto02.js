const prompt = require('prompt-sync')();


// Mostrar quantas rodadas cada jogador ganhou;
// Determinar quem foi o grande campeão de acordo com a quantidade de
// vitórias de cada um (computador e jogador);
// Perguntar se o Jogador quer jogar novamente, se sim inicie volte a escolha
////de quantidade de rodadas, se não finalize o programa.

//// Permitir que eu decida quantas rodadas iremos fazer;
let rodadas = +prompt("Quantas rodadas você deseja fazer?")
//// Ler a minha escolha (Pedra, papel ou tesoura);
//PRECISO CRIAR UM FOR PARA REPETIR A ENTRADA DE JOGADA A QUANTIDADE DE VEZES Q ELES ENTROU AS RODADAS
  for (let i = 0; i < rodadas; i++){

var escolha = prompt("Agora informe sua jogada (PEDRA, PAPEL ou TESOURA: ").toUpperCase()







function conversor(escolha){
if (escolha === "pedra".toUpperCase()){
    escolha =  1
  }
  else if(escolha === "papel".toUpperCase()){
    escolha = 2
  }else{escolha = 3}
  
  return (escolha);
 
}



//// Decidir de forma aleatória a decisão do computador;
function computador(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
 
}
computador(1, 3) //chamando a função
console.log(`Computador ${computador(1, 3)}`)



function convComputador(computador){
if (computador === 1){
    console.log ("Computador escolheu PEDRA")
  }

  else if(computador === 2){
    console.log ("Computador escolheu PAPEL")
  }else{console.log ("Computador escolheu TESOURA")}
   
}

console.log()
console.log(`Sua jogada foi ${escolha}`)
console.log()
convComputador(computador) 
//após receber as escolhas do jogador agora o programa vai comparar com as do computador numa função

function comparacao(conversor, computador){
  if(conversor == 1 && computador == 3){
  console.log("Você ganhou a rodada!")
  }
  else if(conversor == 3 && computador == 2){
  console.log("Você ganhou a rodada!")
  }
  else if(conversor == 2 && computador == 1){
  console.log("Você ganhou a rodada!")
  }

   else if(conversor == 2 && computador == 3){
  console.log("Você perdeu a rodada!")
  }  
  else if(conversor == 3 && computador == 1){
  console.log("Você perdeu a rodada!")
  }  
  else if(conversor == 1 && computador == 2){
  console.log("Você perdeu a rodada!")
  }  

  else{console.log("Rodada empatada!")
  }
return comparcao
}

comparacao(conversor, computador)
}
// var iC = 0
// var cC = 0
// //contador para repetir as rodadas solicitadas pelo jogador

//   for( let i = 0; i <= rodadas; i++){
//   console.log(comparacao)    
    // }
    
  