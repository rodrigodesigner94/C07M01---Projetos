const prompt = require('prompt-sync')();

console.log("Olá, Bem vindo ao jogo de dados! \n É tudo muito simples, voçê deve informar quantas rodadas deseja jogar \n e com quantos amigos deseja compartilhar essa experiência. \n Vamos começar!");


let jogadores = prompt("Informe quantos amigos você chamou: ");
const convJogadores = parseInt(jogadores)

function cadastro(convJogadores){
for (let i = 0; i < jogadores; i++){
    var nome = prompt("Digite o nome do jogador: ");
 return nome
}
};

let numRodadas = prompt("Informe quantas rodadas querem jogar: ");
const convNumRodadas = parseInt(convNumRodadas)

matriz:
function rodadas(let i = 0; i < numRodadas; i++){ //aqui a função contador define a quantidade de rodadas q devem ser realizadas

    secundaria:
   function jogadas(let i = 0; i < convJogadores; i++){ // nesta é definida a quantidade de vezes q o dado deve ser jogado em cada rodadas
    
            return Math.floor(Math.random() * 6 + 1);
     } 
}
rodadas ()
