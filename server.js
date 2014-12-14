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
    /*  userNamez.push(ws);
      //var pName = JSON.parse(jsNamed);
      userNamez.forEach(function(jsNamed){
        userz = jsNamed.name;
        var robot = {name : "Robot", newMessage: userz + " connected", color: "black"};
        //console.log(robot.newMessage);
        //console.log(robot);
        var broadcast = JSON.stringify(robot);
       //console.log(broadcast);
        jsNamed.send(broadcast);
      })*/
      clients.push(ws);
      ws.on("close", function(){
        var x = clients.indexOf(ws);
        clients.splice(x, 1);
      });
      ws.on("message", function(msg){
        history.push(msg);
        for(i=0; i<clients.length; i++){
          //clients[i].send(msg);
        var sentIns = JSON.parse(msg);
        //console.log(sentIns);
        var strangz = sentIns.newMessage.trim().toLowerCase();
        //console.log(strangz);
        var msgzArray = strangz.split(" ");
        //console.log(msgzArray);
        var y = "!yell";
        //console.log(strArray);
        msgzArray.forEach(function(msgz){
          //console.log(insults);
          if(msgz === "trey" || msgz === "\"trey\"" || msgz === "treyjackson" || msgz === "rolandjackson" || msgz === "rolan" || msgz === "rolanjackson"){
          var insultHash = {};
          insultHash["newMessage"] = msgz;
          //console.log(insultHash.newMessage);
          var insultBot = {name: "Robot", newMessage: "'" + insultHash.newMessage + "'" + " is profanity beyond reprieve you are immediately banned", color: "black"};
          //console.log(insultBot.newMessage);
          var jSinsultBot = JSON.stringify(insultBot);
          ws.send(jSinsultBot);
          ws.close();
        }
        else if (msgz === "!kurbee"){
        var kirbcut = msgzArray.splice(0, 1);
        msgzArray.push("<(''<) (^''^) (>'')> <(''<) (^''^) (>'')>   <<< LOOK AT KIRBY GO!");
        //console.log(kirbcut);
        //console.log(msgzArray);
        var kirbyHash = {name: sentIns.name, newMessage: msgzArray, color: sentIns.color};
        //console.log(kirbyHash);
        var jsKirbyHash = JSON.stringify(kirbyHash);
        clients.forEach(function(clients){
          clients.send(jsKirbyHash);
        })
      }
        else if (msgz === "!connected"){
          var cCut = msgzArray.splice(0, 1);
          msgzArray.push(" connected");
          var clientConnect = {name : sentIns.name, newMessage: sentIns.name + msgzArray, color: sentIns.color};
          var jsCC = JSON.stringify(clientConnect);
          clients.forEach(function(clients){
            clients.send(jsCC);
          })
        }
        //userNamez.push(ws);
        //var pName = JSON.parse(jsNamed);
        /*else if (msgz === "!connected"){
        clients.forEach(function(users){
          userz = sentIns.name;
          var robot = {name : "Robot", newMessage: userz + " connected", color: "black"};
          //console.log(robot.newMessage);
          //console.log(robot);
          var broadcast = JSON.stringify(robot);
         //console.log(broadcast);
          users.send(broadcast);
        })
      }*/
        else if (msgz === y){
          var yelling = msgzArray.splice(0, 1);
          console.log(yelling);
          console.log(msgzArray);
          msgzArray.forEach(function(msg){
            msgzArray = msg.toUpperCase();
            return msgzArray;
          })
          var yellHash = {name: sentIns.name, newMessage: msgzArray + "!", color: sentIns.color};
          var jsYellHash = JSON.stringify(yellHash);
          clients.forEach(function(clients){
            clients.send(jsYellHash);
          })
        }
        else if (msgz === "robokirby"){
          var kirbyBot = {name: "Robot", newMessage: "<(''<) (^''^) (>'')> <(''<) (^''^) (>'')>", color: "black"};
          var jsKirbyBot = JSON.stringify(kirbyBot);
          clients.forEach(function(clients){
            clients.send(jsKirbyBot);
          })
        }
        else {
          clients.forEach(function(clients){
            clients.send(msg);
          })
        }
      });
    }
  });
});
