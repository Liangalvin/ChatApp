var wss = require("ws").Server;
var server = new wss({port:3000});
var clients = [];
var history = [];
var userName = [];
server.on("connection", function(ws){
    if (history.length > 0){
      history.forEach(function(msgz) {
        ws.send(msgz);
      })
    }
      clients.push(ws);
      clients.forEach(function(client){
      var robot = {name : "Robot", newMessage: client + " connected", color: "black"};
      console.log(robot);
      var broadcast = JSON.stringify(robot);
      console.log(broadcast);
      ws.send(broadcast);
    })
      ws.on("close", function(){
        var x = clients.indexOf(ws);
        clients.splice(x, 1);
      });
      ws.on("message", function(msg){
        history.push(msg);
        console.log(clients);
        for(i=0; i<clients.length; i++){
          clients[i].send(msg);
        }
    });
  });
/*  clients.push(ws);
  clients.forEach(function(person){
    var pName = JSON.parse(person);
    var robot = {name: "Robot", newMessage: pName + " connected", color: "black"};
    console.log(robot);

    person.send(broadcast);
  });

    var banned = function(userName){
      var uname = userName.toLowerCase();
      if((uname === "trey") || (uname=== "trey jackson")){
        alert("Username is extremely offensive and banned");
      }
    }*/

/*var WebSocketServer = require('ws').Server;
var server = new WebSocketServer({port: 3000})
  server.on("connection", function(ws){
    ws.on("message", function(msg){
      var hash = JSON.parse(msg);
      console.log(hash.name + ": " + hash.words);
      ws.send(hash.name + ": " + hash.words);
    })
  })*/
