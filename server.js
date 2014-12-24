var wss = require("ws").Server;
var server = new wss({port:3000});
var clients = [];
var history = [];
//var userNamez = [];
server.on("connection", function(ws){
    if (history.length > 0){
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
        for(var i = 0; i < clients.length; i++){
        //clients.forEach(function(client){
          clients[i].send(msg);
          console.log(msg);
          //})
        }
        var sentIns = JSON.parse(msg);
        //console.log(sentIns);
        var strangz = sentIns.newMessage.trim().toLowerCase();
        //console.log(strangz);
        var msgzArray = strangz.split(" ");
        //console.log(msgzArray);
        //var y = "!yell";
        //console.log(strArray);
        msgzArray.forEach(function(msgs){
        //clients.forEach(function(msgz){
          //console.log(insults);
          if(msgs === "trey" || msgs === "\"trey\"" || msgs === "treyjackson" || msgs === "rolandjackson" || msgs === "rolan" || msgs === "rolanjackson"){
          var insultHash = {};
          insultHash["newMessage"] = msgz;
          //console.log(insultHash.newMessage);
          var insultBot = {name: "Robot", newMessage: "'" + insultHash.newMessage + "'" + " is profanity beyond reprieve you are immediately banned", color: "black"};
          //console.log(insultBot.newMessage);
          var jSinsultBot = JSON.stringify(insultBot);
          ws.send(jSinsultBot);
          ws.close();
        }
        else if (msgs === "robokirby"){
          var kirbyBot = {name: "Robot", newMessage: "<(''<) (^''^) (>'')> <(''<) (^''^) (>'')>", color: "black"};
          var jsKirbyBot = JSON.stringify(kirbyBot);
            ws.send(jsKirbyBot);
        }
        //else {
          //clients.forEach(function(client){
            //client.send(msgs);
            //console.log(msgs);
          //})
        //}
        //ws.send(msgs);
      });
    //}
    //ws.send(msgs);
  });
});
