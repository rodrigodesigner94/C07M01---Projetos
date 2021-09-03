const prompt = require('prompt-sync')();

console.log("Olá, Bem vindo ao jogo de dados! \n É tudo muito simples, voçê deve informar quantas rodadas deseja jogar \n e com quantos amigos deseja compartilhar essa experiência. \n Vamos começar!");

console.log();

let jogadores = +prompt("Informe a quantodade de jogadores incluindo você: ");
console.log();
let rodadas = +prompt("Agora informe quantas quantas rodadas vocês desejam jogar: ");

//lista de jogadores e suas respectivas jogadas de dado
let listaCadastro = []


//cadastro do jogador e geração dos numeros do dado por rodada
for (let i = 0; i < jogadores; i++){
    let cadastro = {}
    cadastro.nome = prompt("Digite o nome do jogador: ");
    jogadas = [];
 for (let i = 0; i < rodadas; i++){
    let dados = Math.floor(Math.random() * 6 + 1);   
    jogadas.push(dados)
 }
 
  cadastro.jogou = jogadas

 console.log(cadastro)
 listaCadastro.push(cadastro)
}
//um objeto pra cada jogador com nome e número tirado;
console.log(listaCadastro)