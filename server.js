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
        msgzArray.forEach(function(msgz){
        //clients.forEach(function(msgz){
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
        else if (msgz === "robokirby"){
          var kirbyBot = {name: "Robot", newMessage: "<(''<) (^''^) (>'')> <(''<) (^''^) (>'')>", color: "black"};
          var jsKirbyBot = JSON.stringify(kirbyBot);
          //clients.forEach(function(client){
            //client.send(jsKirbyBot);
            ws.send(jsKirbyBot);
          //})
        }
        //else {
          //clients.forEach(function(client){
            //client.send(msg);
            //console.log(msg);
          //})
        //}
        //ws.send(msg);
      });
    //}
    //ws.send(msg);
  });
});


/*
//for hyperlinks
if (text.substring(0, "htt.".length") === "http"){
text="<ahref='" + text + "'</a>";
}
*/
/*
//for imgs
var for firstfour = text.substring(0, 4);
if(firstfour === "http"){
var length = text.length;
varlastthree = text.subtring(length-3), length);
if (lastthree === "png"{
text = "<img src='" + text + '">" + text + "</img>";
else {
text = "<a href='" + text + '"> "+ text + "</a>";
}
})
}
*/
