var wss = require("ws").Server;
var server = new wss({port:3000});
var clients = [];
var history = [];
server.on("connection", function(ws){
    if (history.length > 0) {
      history.forEach(function(msgz) {
        ws.send(msgz);
      })
    }

  clients.push(ws);
    ws.on("close", function(){
      var x = clients.indexOf(ws);
      clients.splice(x, 1);
    });
    ws.on("message", function(msg){
      history.push(msg);
      console.log(msg);
      for(i=0; i<clients.length; i++){
      clients[i].send(msg);
    }
  })
});

/*var WebSocketServer = require('ws').Server;
var server = new WebSocketServer({port: 3000})
  server.on("connection", function(ws){
    ws.on("message", function(msg){
      var hash = JSON.parse(msg);
      console.log(hash.name + ": " + hash.words);
      ws.send(hash.name + ": " + hash.words);
    })
  })*/
