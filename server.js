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
        console.log(jsNamed);
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
    });
  });
