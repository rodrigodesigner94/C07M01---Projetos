const prompt = require('prompt-sync')();

//lista de opções de votos:
const rominhoDaLuz = 13
const carmenDoGas = 25
const mariaDoSocorro = 30
const votoNulo = 00
const VotoEmBranco = 01

//lista para armarzenar votos
let votosCadidato1 = []
let votosCadidato2 = []
let votosCadidato3 = []
let votosNulos = []
let votosBrancos = []


//do... while para repetir enquanto houver eleitores para votar
do {
console.log("Bem vindo(a) à eleição")// a saudação se repete, tendo em vista q cada eleitor em particular registrará seu voto.
console.log()
console.log()

//hora de validar o voto classificando-o como negado, obrigatorio ou facultativo
function validarVoto() {
 
    let ano = new Date()
    const anoRef = ano.getFullYear()
    let anoNasc = +prompt("Por favor informe o ano que nasceu: ")
    let apuracao = (anoRef - anoNasc)
    console.log(`Você tem ${apuracao} anos.`)
   
    if (apuracao < 60 && apuracao >= 18){
      console.log("Voto Obrigatorio!")
      console.log()
      console.log()

      votacao()  
      confirmacao()
    } 
    else if (apuracao === 16 || apuracao === 17){
      console.log("Voto Opcional")
      console.log()
      let pergunta = +prompt("Ainda assim deseja votar? Digite 1 para SIM e 0 para NÃO: ")
        if (pergunta === 1){
            console.log()
            console.log()
            votacao()  
            confirmacao()
            }else{console.log()
                console.log("Obrigado, mas lembre que a partir dos\n18 anos de idade o voto será obrigatório.") //a pessoa tem o direito de abster-se mesmo
                console.log()                                                                                   //tendo ido votar, com direito de não computar o voto
                console.log()
            }                                                                                                       
    }
    else if (apuracao >= 60){
        console.log("Voto Opcional")
        console.log()
        let pergunta = +prompt("Ainda assim deseja votar? Digite 1 para SIM e 0 para NÃO: ")
          if (pergunta === 1){
              console.log()
              console.log()
              votacao()  
              confirmacao()
              }else{console.log()
                  console.log("Obrigado, você escolheu não votar.")//a pessoa tem o direito de abster-se mesmo
                  console.log()                                    //tendo ido votar, com direito de não computar o voto
                  console.log() 
              }                                                      
     }else{console.log("Voto negado!")
           console.log()
           console.log()}                              
    }


    
    
// nesse validador achei mais prudente pedir a idade na entrada, pois pedir o ano geraria algumas complicações
// como a necessidade de atualização de uma variavel com o ano da eleição para calcular com o ano de nascimento do eleitor 
// assim como seria necesario ainda calcular a idade em meses para determinar se na época da eleição o eleitor 
// tem de fato a idade elegivel ou está em vesperas de completa-la.
validarVoto()



//função para registrar votos
function votacao(){
    //menssagens para o eleitor orientando a como efetuar a votação 
console.log(`Caro eleitor, por favor digite com atenção o código referente ao seu voto
afim de evitar problemas em sua computação, em casos: digitar o código de outro candidato
que não seja o desejado será possivel corrigir, em caso de digitar um código invalido para
qualquer opção a urna identificará o erro e solicitará q seja refeito.`);
console.log()
console.log(`Para efetuar o voto basta informar o código, ao final coferir mone e código que serão apresentados na tela
e então COMFIRMAR (se estiver tudo correto) ou CORRIGIR (se for necessário).`);
console.log()
console.log(`Lista de códigos em relação ao voto desejado:
Para votar em Rominho da Luz digite ${rominhoDaLuz}

Para votar em Carmen do Gás digite ${carmenDoGas}

Para votar em Maria do Socorro digite ${mariaDoSocorro}

Se desejar votar NULO digite ${votoNulo}

Caso queira votar em BRANCO digite ${VotoEmBranco}`)

console.log()
console.log()
     var voto = +prompt("Digite aqui o código de seu voto: ");
console.log()

     if (voto === rominhoDaLuz){
        console.log(`Você votou Rominho da Luz código ${rominhoDaLuz}`)
        console.log()
        console.log()

        let count = 0
        count++
        votosCadidato1.push(count)

     }else if (voto === carmenDoGas){
        console.log(`Você votou Carmen do Gás código ${carmenDoGas}`)
        console.log()
        console.log()

        let count = 0
        count++
        votosCadidato2.push(count)

     }else if (voto === mariaDoSocorro){
        console.log(`Você votou Maria do Socorro código ${mariaDoSocorro}`)
        console.log()
        console.log()

        let count = 0
        count++
        votosCadidato3.push(count)

     }else if (voto === votoNulo){
        console.log(`Você votou NULO código ${votoNulo}`)
        console.log()
        console.log()

        let count = 0
        count++
        votosNulos.push(count)

     }else if (voto === VotoEmBranco){
        console.log(`Você votou em BRAMCO código ${VotoEmBranco}`)
        console.log()
        console.log()

        let count = 0
        count++
        votosBrancos.push(count)    

    }else{console.log('Código invalido, por favor tente novamente usando um dos códigos listados.')
        console.log()
        console.log()
    votacao()
    confirmacao()
    }
    
}


//função para confirmar ou corrigir o voto caso seja necessário 
function confirmacao(){
let confirmar = +prompt("As informações do candidato estão corretas? Se sim digite 1 para CONFIRMAR, caso contrario digite 2 para CORRIGIR e efetuar o voto novamente: ");
    //tem um buge nesse prompt, ele fica repetindo a primeira linha do texto a cada caractere digitado pelo usuario. dá uma olhadinha teatcher e me passa um feedback, por favor. obrigado!
    console.log()

    if (confirmar == 1){
        console.log("Candidato confirmado!")
        console.log()
        console.log()
        
    }else{console.log("Tente novamente:")
        console.log()
        console.log()
        votacao()
        
    }

}
var maisvotos = prompt("Ainda há votos para computar: ").toUpperCase()
console.log()
console.log()
}while (maisvotos === "SIM")

console.log("Resultado:")
console.log(`O candidato Rominho da Luz código ${rominhoDaLuz} recebeu ${votosCadidato1.length} votos`)
console.log(`O candidata Carmen do Gás código ${carmenDoGas} recebeu ${votosCadidato2.length} votos`)
console.log(`A candidata Maria do Socorro código ${mariaDoSocorro} recebeu ${votosCadidato3.length} votos`)
console.log(`Os Nulos somam ${votosNulos.length} votos`)
console.log(`Os em branco somam ${votosBrancos.length} votos`)



