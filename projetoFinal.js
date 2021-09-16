const prompt = require('prompt-sync')();
console.log(`
Uma garota acorda na sala de uma pequena casa, sem lembrar seu nome, idade
ou qualquer tipo de informação pessoal, além de não saber onde  está que dia é.`)

console.log()
console.log(`
Sentindo uma incomoda dor de cabeça, "seria uma ressaca?". Ela pensa.
Poderia ter bebido tanto ao ponto de perder a memoria por algumas horas?`)

console.log()
console.log(`
Ela olha ao redor para tentar encontrar qualquer coisa que possa conter alguma informação útil.`)

console.log()
console.log(`
Na sala há um computador e um celular, sobre a mesa, um sofá de três lugares
com travesseiros e um coberto.`)

console.log()
console.log(`
Na mesma sala há também uma estante com uma coleção de vinis, um aparelho toca-discos e ao lado uma Tv .
Ela também pode ver uma geladeira, fogão e um armario dispensa sobre a uma pia com um pouco de louças sujas.`)

console.log()
console.log(`
Ainda sem saber o que fazer ela se questiona o que teria acontecido.
Você pode descobrir o que aconteceu ao longo da historia. O que ela deve fazer agora?`)

function segundoFinal(){
    console.log()
    console.log(`
    Luani decide esperar para ver o que acontece, se alguém chega ou se acontece um milagre.
    Ela começa a vasculhar a pequena casa em busca de pistas, mas não obteve sucesso.
    Depois de algumas quase já para escurecer o dia, ela ouve um barulho.
    Então entra pela porta um homem.
    -Quem é você? O que quer Comigo?
    -Calma Luani, você está bem?
    -Você me conhece? Me diz quem é você, o que estou fazendo aqui e o porquê não lembro de nada.
    Ja liguei pra policia e eles ja estão vindo me buscar.
    -P*t* merda Luani você fez isso? Você estragou tudo que planejamos.
    -Do que você esta falando?
    -Eu sou o Eduardo seu noivo. Planejamos fugir das nossas familias e recomeçar em um lugar distante deles,
    para isso dar certo parte do plano era cada um tomar essa pílula do esquecimento, para esquecer nosso passado
    e começar do zero, você insistiu de tomar sua pilula ontem depois de discutir com sua mãe pelo telefone. Mas
    eu ainda precisava resolver algumas coisas antes de tomar a minha então sai cedo para tratar dessas questões e
    planejava voltar o mais rapido possível infelizmente so consegui agora, mas pelo visto você já estragou tudo.
    -Como posso ter certeza que você não me sequestrou, me deu a pílula e agora está mentindo?
    -Tenho todas as nossas conversas no celular, posso te mostrar. Também essas cartas que escrevemos para nossos
    futuros "eus" explicando o que aconteceria e para que fizemos isso.
    -Deixar eu ver isso aí.
    Após ler a carta e ver as menssagens trocadas no celular ela pergunta:
    -Você tem quantas pilulas aí?
    -Tenho duas.
    -Você ainda quer seguir o plano?
    -Mas a policia ja etá a caminho para me prender como seu sequestrador!
    -não eu estava blefando. Quer dizer, realmente liguei pra policia, mas não sabia dizer que lugar é esse,
    nem eles puderam rastrear a chamada. Então se você ainda quiser podemos esquecer tudo incluseve o que acnteceu hoje.
    -Eu aceito!`)
    console.log()
    console.log("Eles arrumaram tudo, deixaram as cartas presas na geladeira e tomaram a pilular.")
    console.log()
    console.log("Fim.")
}

//objeto contendo a chave de menu principal do jogo.
let primerQuestions = {1: ' Ir até a geladeira procurar algo para comer.',
    2: ' Usar o celular sobre a mesa para tentar se comunicar com alguém, qualquer pessoa.',
    3: ' Ligar o computador.',
    4: ' Ligar a tv.'}    

console.log()
console.log(primerQuestions)

var descobertas = [] //em determinados momentos o jogador poderá ir arquivando suas descobertas ao longo do jogo nessa lista e visualiza-las ou não após gravar cada informação.

function oQueVcSabeAteAgora(){ //essa é a function que faz o processo de gravação e apresentação da lista para o jogador.
       let descobriu = prompt("O que você já descobriu? ")
    console.log()
    descobertas.push(descobriu)
    console.log()
    let pergunta = prompt("Deseja ver tudo que ja descoberiu até agora?")
    console.log()
    if (pergunta.toUpperCase() === "SIM" ){
        console.log(`Suas descobertas são: ${descobertas}`)
    }else{let continuar = prompt("Enter para continuar!")}
}

function chavesDecisao(){
    console.log()
    let escolha1 = +prompt("Digite aqui o numero que corresponde a sua escolha: ")

    if (escolha1 === 1){
        console.log()
        console.log(`
        Na geladeira tem uma embalagem de comida japonesa.`)
        console.log()
        let escolha = prompt("Ela deve comer? SIM ou NÃO:  ")
        if (escolha.toUpperCase() === "SIM"){
            console.log(`Enquanto come ela sente uma certa satisfação.
            Seria essa sua comida favorita?`) 
            oQueVcSabeAteAgora()
            console.log()
            delete primerQuestions[1]
            console.log(primerQuestions)// nesse momento o jogador entrou em um beco sem saída e deve escolher um novo caminho para seguir.
            console.log()
            chavesDecisao()
                
        }else{console.log()
            console.log("Parece que você encontou um beco sem saída, que tal escolher um novo caminho!")
            delete primerQuestions[1]
            console.log(primerQuestions)// nesse momento o jogador entrou em um beco sem saída e deve escolher um novo caminho para seguir.
            console.log()
            chavesDecisao()
                
        }


    }else if (escolha1 === 2){
        function repertirEscolha2(){  
            let opcoes = ["(21)94536-2537", "(22)97643-3453", "190",]
            console.log()
            console.log(`
            É um aparelho simples, ela vai até a aba chamadas e há apenas ${opcoes.length} chamadas feitas nas ultimas 24 horas.
            Ele deve ligar para qual numero?`)
            console.log()
            
            for (let index = 0; index < opcoes.length; index++)
            console.log(`${index} - ${opcoes[index]}`)
            console.log()
                let escolha = +prompt("Digite aqui o numero que corresponde a sua escolha: ")
                if (escolha === 0){
                    console.log(`
                    -Yaksoba Dez, posso registrar seu pedido?
                    -Oi, aló, o que é?
                    -Serviço de delivery Yaksoba Dez senhora, posso registrar seu pedido?
                    Decepcionda ela desliga o telefone.`)
                    oQueVcSabeAteAgora()
                    console.log()
                    console.log("Parece que você encontou um beco sem saída, que tal escolher um novo caminho!")
                    console.log()
                    console.log(primerQuestions)// nesse momento o jogador entrou em um beco sem saída e deve escolher um novo caminho para seguir.
                                        
                    repertirEscolha2()

                }else if (escolha === 1){
                        console.log(`
                        -Aló?
                        -Oi, por favor me ajuda! Eu não lembro meu nome, não sei onde estou. Me ajuda por favor!
                        -Luani é você minha filha? É a mamãe falando. Pra onde o bandido do Eduardo te levou?
                        -Oi, a senhora me conhece? Como sabe que é minha mãe?
                        -Luani minha filha eu reconheceria sua voz em qualquer lugar minha filha.
                        -Mãe eu não sei onde eu tô. Estou desesperada, não sei o que fazer.
                        -Minha filha olha pela janela e diz pra mamãe o que você ta vendo.
                        -Nada mãe, so tem mato. Estou no meio do nada.
                        -Meu Deus, a gente vai dar um jeito de te...
                        -A ligação foi encerrada por falta de creditos, para continuar a falar faça uma recarga.`)
                        console.log()
                        console.log(`Nessa hora a Luani entra em desespero e grita para o telefone, mas se sente 
                        menos confusa, pois agora ao menos sabe o proprio nome.`)
                        oQueVcSabeAteAgora()

                        do {var perguntaChave = prompt(`Agora que sabe o próprio nome, ela deve ligar para a polícia 190? SIM ou NÃO: `)
                            if(perguntaChave.toUpperCase() === 'SIM'){
                                console.log()
                                console.log(`
                                -Olá bem seja bem vindo ao serviço de teleatendimento da policia militar.
                                Por favor aguarde um instante enquanto localizo um atendente na sua região.
                                -Olá, sou a agnete Erica da policia do estado de Minas Gerais, como posso posso ajudar?
                                -Oi policial Erica, eu acabei de descobrir que meu nome é Luani em uma ligação acidental para
                                o telfone da minha mãe. Não sei onde estou, por favor me ajuda!!!
                                -Sim Luani, peço que por favor mantenha a calma faremos o maximo para te ajudar, me agurade um instante.
                                A agente desconfiada de algo resolveu verificar uma suspeita.
                                -Luani, acabei de verificar que existe um registro sequestro no Rio de Janeiro, de Luani Assunção,
                                sequestrador suspeito, Eduardo Costa Neto, ex parceiro da vitima. Registro feito pela mãe, Irani Assunção
                                essas informação significam algo para a senhora?
                                -Moça eu não lembro de nada, so sei q acordei em uma casa no meio do nada achei esse telefone q tinha um numero
                                que por coincidencia atendeu uma mulher que disse reconhecer minha voz e me chamou de Luani e disse que sou sua filha.
                                -Luani você realmente não consegue identificar onde está?
                                -Não, aqui não tem sinal de internet, esse celular esgotou o pouco de credito q havia enquanto falava com quem acredito que era minha mãe
                                -Esse aparelho deve ser descartavel, não consigo rastrear a localização do sinal. Mas em todo caso sabemos que você está no
                                estado de Minas Gerais, pois foi o estado onde o sistema identificou a conexão da linha.
                                -O que eu devo fazer policial? Estou desesperada.
                                Quando então a ligação cai.`)
                                console.log()
                                oQueVcSabeAteAgora()
                                console.log()
                                let pergunta = prompt("Ela deve sair da casa para procurar ajuda? Reponda SIM ou NÃO: ")
                                console.log()
                                if (pergunta.toUpperCase() === "SIM"){
                                    console.log(`Luani então se dispõe a caminha o tempo q for necessário para chegar a algum
                                    lugar ou encontrar quem possa a ajudar.
                                    Depois de algum tempo caminhando ao longe ela avista uma casa simples, logo se apressa para alcançar.
                                    Quando então lá chega, encontra uma senhora sentada à prota.
                                    -Oi, tudo bem? Preciso de ajuda, a senhora poderia me dizer por favor o nome deste lugar?
                                    -Mas com muito gosto. Aqui é o distrito de Santa Rita de Ouro Preto.
                                    -Então, estamos perto da Cidade de Ouro Preto?
                                    -Estamos sim. A moça ta perdida?
                                    -Pra ser sincera acabei de descobrir q fui sequestrada e moro no Rio de Janeiro, mas não lembro de nadinha.
                                    Tudo que sei até agora descobri, nas ultimas 3hs.
                                    -Parece até historia de que a gente vê nas novelas.
                                    -Me desculpe a falta de educação, meu nome é Luani.
                                    -O sou a Filomena, muito gosto em conhecer.
                                    -O prazer é meu dona Folimena, a senhora teria um telefone que eu pudesse fazer uma ligação para um numero
                                    que parece ser da minha mãe?
                                    -Claro, venha comigo vou te levar até o telefone.`)
                                    console.log()
                                    console.log("Luani liga para o numero que falara com sua suposta mãe mais cedo e marca para que alguém vá busca-la. No entanto ela voltará para casa sem saber o que houve, até que se lembre.")
                                    console.log()
                                    let perguntaFinal = prompt('Deseja finalizar a historia? SIM ou NÃO: ')

                                    if (perguntaFinal.toUpperCase() === "SIM"){
                                        console.log ('Fim')

                                    }else{ segundoFinal()
                                    }

                                }else{ segundoFinal() //a historia toma outro rumo
                                
                                }
                            }else{console.log()
                                console.log("Parece que você encontou um beco sem saída, que tal escolher um novo caminho!")
                                console.log()
                               
                                                    
                        }  
                     }while (perguntaChave.toUpperCase() != "SIM")         

                        

                    }else{console.log(`
                        "Mas como ligar para a policia se nem mesmo sei dizer onde estou
                        ou onde estou. Pareceria uma louca! Pessima ideia."`)
                        console.log()
                        console.log("Parece que você encontou um beco sem saída, que tal escolher um novo caminho!")
                        console.log()
                        repertirEscolha2()

                    }
        }  
        repertirEscolha2()

    }else if (escolha1 === 3){
        console.log()
        console.log(`
        "Mas que dr*ga!!! Sem conexão? Não é possível!"
        Ao menos ela conseguiu ver a data do dia.
        (Segunda-feira, 12 de junho de 2011)`)
        console.log()
        console.log("Parece que você encontou um beco sem saída, que tal escolher um novo caminho!")
        oQueVcSabeAteAgora
        delete primerQuestions[3]
        console.log(primerQuestions) // nesse momento o jogador entrou em um beco sem saída e deve escolher um novo caminho para seguir.
        
        chavesDecisao()

    }else{
        console.log()
        console.log(`
        Depois de algum tempo com a tv ligada, o noticiário começa a falar sobre o caso de
        um foragido da policia acusado de sequestar uma jovem desparecida há 3 dias.
        O nome do foragido é Eduardo Costa Neto e o da jovem Luani Assunção.`)
        console.log()
        console.log("Parece que você encontor um beco sem saída, que tal escolher um novo caminho!")
        oQueVcSabeAteAgora
        delete primerQuestions[4]
        console.log(primerQuestions)// nesse momento o jogador entrou em um beco sem saída e deve escolher um novo caminho para seguir.
        
        chavesDecisao()

    }
}
chavesDecisao()