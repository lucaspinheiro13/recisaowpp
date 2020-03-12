const path = require('path');
const WhatsApee = require(path.join(__dirname, 'WhatsApee.js'));
//WhatsAppe.start( receiver callback)
WhatsApee.start(receiver);


const Pessoa = {};

// 
function receiver (message,chatElem,title) {
	  //message to lower case
	var lcMessage = message.toLowerCase();
      let nome = document.querySelector("#main > header > div._3V5x5 > div > div > span").innerHTML;
      Pessoa.Nome = nome;
      
      if (lcMessage.includes("ola bot")) {                  
            var welcomeMessage = 'Olá,'+Pessoa.Nome;
            
            //WhatsApee.send(chat Elem is like chat id , message to send goes here)               
            WhatsApee.send(chatElem,welcomeMessage );    
            
      } 

      if(lcMessage.includes("@time")){
            WhatsApee.send(chatElem, new Date());
      } 
      
}