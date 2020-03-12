const path = require('path');
const WhatsApee = require(path.join(__dirname, 'WhatsApee.js'));
const mysql = require('mysql');

const connection = mysql.createConnection({
      host:'localhost',
      user:'root',
      password:'',
      database:'rescisaowpp'
});

//WhatsAppe.start( receiver callback)
WhatsApee.start(receiver);

var cliente = function Cliente() {
      this.nome
      this.salario
      this.ferias
      this.decimo
}

const Pessoa = [];

var valida = true;
// 
function receiver (message,chatElem,title) {
	 
      var lcMessage = message.toLowerCase();
      
      let nome = document.querySelector("#main > header > div._3V5x5 > div > div > span").innerHTML;

      for (let i = 0; i <= Pessoa.length; i++) {
            
            if (Pessoa[i].nome == nome) {

                var Cliente = Pessoa[i];

                valida = false;

                break;

            } else {
                valida = true;
            }
      }
      if(valida = true){

            Pessoa.push(new cliente());

            var Cliente = Pessoa[Pessoa.length-1];

            Cliente.nome = nome;

      }

      if (lcMessage.includes("ola")) {   

            var welcomeMessage = 'Olá,'+Cliente.nome;

            WhatsApee.send(chatElem,welcomeMessage );      

      } 
      


      if(lcMessage.includes("@time")){
            WhatsApee.send(chatElem, new Date());
      } 
      
}