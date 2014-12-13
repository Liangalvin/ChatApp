var wss = require("ws").Server;
var server = new wss({port:3000});
var clients = [];
var history = [];
var userNamez = [];
server.on("connection", function(ws){
    if (history.length > 0){
      history.forEach(function(msgz) {
        ws.send(msgz);
      })
    }
      userNamez.push(ws);
      userNamez.forEach(function(jsNamed){
        var robot = {name : "Robot", newMessage: jsNamed.name + " connected", color: "black"};
        console.log(robot.newMessage);
        //console.log(robot);
        var broadcast = JSON.stringify(robot);
      //  console.log(broadcast);
        jsNamed.send(broadcast);
      })
      clients.push(ws);
      ws.on("close", function(){
        var x = clients.indexOf(ws);
        clients.splice(x, 1);
      });
      ws.on("message", function(msg){
        history.push(msg);
        //console.log(clients);
        for(i=0; i<clients.length; i++){
          clients[i].send(msg);
        }
        var sentIns = JSON.parse(msg);
        var strangz = sentIns.newMessage.trim();
        var strArray = strangz.split(" ");
        strArray.forEach(function(str){
          var insults = str.toLowerCase();
          if(insults === "trey" || insults === "trey jackson" || insults === "roland" || insults === "roland jackson"){
          var insultHash = {};
          insultHash["name"] = str;
          var jsInsultHash = insultHash.name;
          var insultBot = {name: "Robot", newMessage: jsInsultHash.name + " that word is an insult beyond reprieve you are immediately banned", color: "black"}
          console.log(insultBot.newMessage);
          var jSinsultBot = JSON.stringify(jSinsultBot);
          ws.send(jSinsultBot);
          ws.close();
          }
        console.log(strArray);
    });
  });
});
