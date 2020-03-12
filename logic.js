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
      
     
      if (lcMessage.includes("ola")) {   
            var valida = true ;
            for ( i = 0; i < Pessoa.length; i++) {
                  if(Pessoa[i]){
                        if (Pessoa[i].nome == title) {
            
                        var Cliente = Pessoa[i];
            
                        valida = false;
                        console.log('chegou auqi');
                        break;
            
                        } else {
                        
                        valida = true;
                        }
                  }

            }
            console.log(valida);
            if(valida = true){
      
                  Pessoa.push(new cliente());
      
                  var Cliente = Pessoa[Pessoa.length-1];
      
                  Cliente.nome = title;
      
            }
            
            var welcomeMessage = 'Olá, '+ Cliente.nome;
            console.log(Pessoa);
            WhatsApee.send(chatElem,welcomeMessage );      

      } 
      


      if(lcMessage.includes("@time")){
            WhatsApee.send(chatElem, new Date());
      } 
      
}