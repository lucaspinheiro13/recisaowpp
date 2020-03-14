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

            Cliente.nome = title;

      }

     
      if (lcMessage.includes("ola")) {   
            var welcomeMessage = 'Olá, '+ Cliente.nome;
 
            WhatsApee.send(chatElem,welcomeMessage );      

      } 
      
      if (lcMessage == "!recisao"){

            var message = "Digite seu Salario atencedido de ! : Ex. !5000.00\n Testando barra;\n \t 1- teste menu ";

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