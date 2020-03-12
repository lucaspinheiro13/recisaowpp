const path = require('path');
const WhatsApee = require(path.join(__dirname, 'WhatsApee.js'));
//WhatsAppe.start( receiver callback)
WhatsApee.start(receiver);

function Cliente() {
      this.nome
      this.salario
      this.ferias
      this.decimo
}

const Pessoa = [];
var valida;
// 
function receiver (message,chatElem,title) {
	  //message to lower case
      var lcMessage = message.toLowerCase();
      
      let nome = document.querySelector("#main > header > div._3V5x5 > div > div > span").innerHTML;
      for(let i = 0; i <= Pessoa.length; i++){
            if(Pessoa[i].nome == nome){
                var Cliente = Pessoa[i];
                valida = false;
                break;
            }else{
                valida = true;
            }
      }
      if(valida = true){
            Pessoa.push(new Cliente());
            var Cliente = Pessoa[Pessoa.length-1];
            Cliente.nome = nome;
      }

      if (lcMessage.includes("ola bot")) {                  
            var welcomeMessage = 'Olá,'+Cliente.nome;

            WhatsApee.send(chatElem,welcomeMessage );      
      } 



      if(lcMessage.includes("@time")){
            WhatsApee.send(chatElem, new Date());
      } 
      
}