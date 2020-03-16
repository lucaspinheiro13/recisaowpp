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

     
      if (lcMessage ==  "Ola bot") {   
            var welcomeMessage = 'Olá, '+ Cliente.nome  + ', como posso ajudar? \n 1 - Calcular Rescisão \n 2 - Entrar em contato \n 0 - Encerrar atendimento. ';
            Cliente.passo = "first" ;
            WhatsApee.send(chatElem,welcomeMessage );      

      } 
      
      if (Cliente.passo = "first"){

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

      if(lcMessage.charAt(0)=="!"){
            var message = lcMessage.substr(1,lcMessage.length-1);
            Cliente.salario = message;

            WhatsApee.send(chatElem,"Seu salario"+Cliente.salario);
      }


      if(lcMessage.includes("@time")){
            WhatsApee.send(chatElem, new Date());
      } 
      
      console.log (Pessoa);
}