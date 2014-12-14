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
      //var pName = JSON.parse(jsNamed);
      userNamez.forEach(function(jsNamed){
        userz = jsNamed.name;
        var robot = {name : "Robot", newMessage: userz + " connected", color: "black"};
        //console.log(robot.newMessage);
        //console.log(robot);
        var broadcast = JSON.stringify(robot);
       //console.log(broadcast);
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
        //console.log(sentIns);
        var strangz = sentIns.newMessage.trim().toLowerCase();
        //console.log(strangz);
        var msgzArray = strangz.split(" ");
        //console.log(msgzArray);
        var y = "!yell";

        //console.log(strArray);
        msgzArray.forEach(function(msgz){
          //console.log(insults);
          if(msgz === "trey" || msgz === "\"trey\"" || msgz === "treyjackson" || msgz === "rolandjackson"){
          var insultHash = {};
          insultHash["newMessage"] = msgz;
          //console.log(insultHash.newMessage);
          var insultBot = {name: "Robot", newMessage: insultHash.newMessage + " is an insult beyond reprieve you are immediately banned", color: "black"};
          //console.log(insultBot.newMessage);
          var jSinsultBot = JSON.stringify(insultBot);
          ws.send(jSinsultBot);
          ws.close();
        }
        else if (msgz === y){
          var yelling = msgzArray.splice(0, 1);
          console.log(yelling);
          console.log(msgzArray);
          msgzArray.forEach(function(msg){
            msgzArray = msg.toUpperCase();
            return msgzArray;
          })
          var yellHash = {name: sentIns.name, newMessage: msgzArray, color: sentIns.color};
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
        // else if (insults === "(kdnc)"){
        //   var userMessage = {newMessage: "<(''<) (^''^) (>'')> <(''<) (^''^) (>'')>"};
        //   var kMessage = JSON.stringify(userMessage);
        //   ws.send(userMessage);
        // }
    });
  });
});

/*var kirby = function(msg){
  if (sentIns.newMessage.trim() === "(kdnc)"){
    var kirbe = {};
    kirbe["name"]= sentIns.names;
    kirbe["userMessage"]= "<(''<) (^''^) (>'')> <(''<) (^''^) (>'')>";
    kirbe["color"]= sentIns.color;
    jsKirby = JSON.stringify(kirbe);
    ws.send(jsKirby);
  }
}*/
