const path = require('path');
const WhatsApee = require(path.join(__dirname, 'WhatsApee.js'));
//WhatsAppe.start( receiver callback)
WhatsApee.start(receiver);

const Pessoa = {};

// 
function receiver (message,chatElem,title) {
	  //message to lower case
	var lcMessage = message.toLowerCase();
      
      if (lcMessage.includes("ola bot")) {                  
                  var welcomeMessage = 'Digite seu nome.';
                  Pessoa.passo[0] = true;
                  //WhatsApee.send(chat Elem is like chat id , message to send goes here)               
                  WhatsApee.send(chatElem,welcomeMessage);                  
      } else {      
            if (Pessoa.passo[0]) {
                  Pessoa.nome = lcMessage;
                  var message = lcMessage.toUpperCase()+" Em que posso ajudar?";
                  message += "1- Calculo Recisão";
                  message += "0- Voltar";
                  
                  WhatsApee.send(chatElem,message);
            }
            if (Pessoa.nome&&!Pessoa.passo[1]) {
                  Pessoa.acao = lcMessage;
                  Pessoa.passo[1]=true;
                  var message = "Insira seu salário";
                  WhatsApee.send(chatElem,message);
            }
            if (Pessoa.acao&&!Pessoa.passo[2]) {
                  Pessoa.salario = lcMessage;
                  Pessoa.passo[2];
                  var message = Pessoa.salario*2/100;
                  WhatsApee.send(chatElem,message);

            }
      }

      if(lcMessage.includes("@time")){
            WhatsApee.send(chatElem, new Date());
      } 
      
}