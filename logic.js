const path = require('path');
const WhatsApee = require(path.join(__dirname, 'WhatsApee.js'));

var cliente = function Cliente() {
  this.nome
  this.salario
  this.ferias
  this.decimo
}

const Pessoa = [];
// const mysql = require('mysql');

// const connection = mysql.createConnection({
//       host:'localhost',
//       user:'root',
//       password:'',
//       database:'rescisaowpp'
// });

//WhatsAppe.start( receiver callback)
function calcularRescisao(obj){
      return "Sua rescisão será em média :";
}
WhatsApee.start(receiver);
// 
function receiver (message,chatElem,title) {
      
      var lcMessage = message.toLowerCase();
      
      var valida = true ;
      for ( i = 0; i < Pessoa.length; i++) {
            if(Pessoa[i]){
          
                  if (Pessoa[i].nome == title) {
                        var Cliente = Pessoa[i];
                        Clinte.index = i;
                        valida = false;
                        break;
                  } else {
                        valida = true;
                  }
            }

      }

      if(valida == true){

            Pessoa.push(new cliente());

            var Cliente = Pessoa[Pessoa.length-1];
            Cliente.index = Pessoa.length-1;
            Cliente.nome = title;

      }
      if(Cliente.passo=="seventh"){
            Cliente.ferias = lcMessage;
            WhatsApee.send(chatElem,calcularRescisao(Cliente));
      }
      if(Cliente.passo=="sixth"){
            Cliente.aviso = lcMessage;
            Cliente.passo = "seventh";
            message = "Por fim, suas férias foram vencidas? \n\t1- Sim \n\t 2- Não ";
            WhatsApee.send(chatElem,message);
      }
      if(Cliente.passo =="fifth"){
            Cliente.tipoDemissao = lcMessage;
            Cliente.passo = "sixth";
            message = "Como foi pago seu aviso?\n\t 1-Indenizado\n\t2-Trabalhado";
            WhatsApee.send(chatElem,message);
      }
      if (Cliente.passo=="fourth") {
            Cliente.dataDe= lcMessage;
            Cliente.passo = 'fifth';

            message= "Estamos acabando, preciso que me informe como foi sua rescisão\n\t1-Pedido de Demissão\n\t2-Justa Causa\n\t3-Sem Justa Causa\n\t4-Fim de Experiência";
            WhatsApee.send(chatElem,message);
      }
      if (Cliente.passo == "third") {
            Cliente.dataAd= lcMessage;
            Cliente.passo = 'fourth';

            message = "Da mesma forma, agora sua data de demissão: \n Ex. 01-02-2020";
            WhatsApee.send(chatElem,message);
      }
      if (Cliente.passo =="second") {
            let salario =  lcMessage;
            salario.replace('.','');
            salario.replace(',','.');
            Cliente.salario = salario;
            Cliente.passo = 'third';
            
            message = "Agora, me indique o dia da sua admissão como no exemplo: \n Ex. 01-01-2020";
            WhatsApee.send(chatElem,message);
      }
      
      if (Cliente.passo == "first"){

            switch (lcMessage){
                  case '1':
                        message = "Ótimo , para começarmos digite o valor do salário \n \t Não tema, você está seguro consoco..."
                        Cliente.passo="second";
                        break;
                  case '2':
                        message = "Entendi, para entrar em contato conosco ligue para 99694-0316\n Aguardamos sua ligação!";
                        Pessoa.splice(Cliente.index,1);
                        break;
                  case '0':
                        message = "Até a próxima !";
                        Pessoa.splice(Cliente.index,1);
                        break;
                  default:
                        message = "Comando não identificado, tente denovo. \n Escolha uma das opções do menu anterior. "
            }
            WhatsApee.send(chatElem,message);

      }

      if (lcMessage ==  "ola bot") {   
            var welcomeMessage = 'Olá, '+ Cliente.nome  + ', como posso ajudar? \n 1 - Calcular Rescisão \n 2 - Entrar em contato \n 0 - Encerrar atendimento. ';
            Cliente.passo = "first" ;
            WhatsApee.send(chatElem,welcomeMessage );      

      } 
      
      console.log (Pessoa);
}