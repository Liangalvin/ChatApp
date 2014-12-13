var ws = new WebSocket("ws://localhost:3000");
//var ws = new WebSocket("ws://alvin.princesspeach.nyc:3000");


var ul = document.createElement("ul");
var body = document.querySelector("body");
body.appendChild(ul);

ws.addEventListener("open", function(evt){
  var userName = prompt("GIVE ME YOUR PHUCKING NAME").trim();
  if (userName.length > 0){
    var jsName = {}
    jsName["name"]= userName;
    console.log(jsName.name);
    var jsNamed = jsName.name//JSON.stringify(jsName);
    ws.send(jsNamed);
    console.log(jsNamed);
    //console.log(jsName);
    }
    var userColor = prompt("pick a color");

    //addText('Current Status: Connected');
    var addText = function(msg){
      var newli = document.createElement("li");
      var mssg = JSON.parse(msg);
      var printMessage = mssg.name + ": " + mssg.newMessage;
      console.log(mssg);
      newli.style.color = mssg.color;
      newli.innerHTML = printMessage;
      var firstli = ul.firstChild;
      ul.insertBefore(newli, firstli);
    }

  ws.addEventListener("message", function(evt){
    addText(evt.data);
    });

  button.addEventListener("click", function(evt){
    var inputStr = document.querySelector("#input");
    var userMessage = {name: userName, newMessage: inputStr.value, color: userColor};
    // user["strings"] = inputStr.toString().trim();
    var info = JSON.stringify(userMessage);
      ws.send(info);
      input.value = " ";
  });

  input.addEventListener("keypress", function(evt){
      if(evt.keyCode === 13){
        var inputStr = document.querySelector("#input");
        var userMessage = {name: userName, newMessage: inputStr.value, color: userColor};
        var info = JSON.stringify(userMessage);
      ws.send(info);
      input.value = " ";
    }
  });
});

/*var ws = new WebSocket("ws://localhost:3000");
//var ws = new WebSocket("ws://alvin.princesspeach.nyc:3000");

var userName = prompt("GIVE ME YOUR PHUCKING NAME").trim();
//var jsName = JSON.stringify(userName);
//ws.send(userName);
//console.log(userName);
var userColor = prompt("pick a color");

var ul = document.createElement("ul");
var body = document.querySelector("body");
body.appendChild(ul);

ws.addEventListener("open", function(evt){
  //addText('Current Status: Connected');
  var addText = function(msg){
    debugger;
    var newli = document.createElement("li");
    var mssg = JSON.parse(msg);
    var printMessage = mssg.name + ": " + mssg.newMessage;
    console.log(mssg);
    newli.style.color = mssg.color;
    newli.innerHTML = printMessage;
    var firstli = ul.firstChild;
    ul.insertBefore(newli, firstli);
  }

ws.addEventListener("message", function(evt){
  addText(evt.data);
  });

button.addEventListener("click", function(evt){
  var inputStr = document.querySelector("#input");
  var userMessage = {name: userName, newMessage: inputStr.value, color: userColor};
  // user["strings"] = inputStr.toString().trim();
  var info = JSON.stringify(userMessage);
    ws.send(info);
    input.value = " ";
});

input.addEventListener("keypress", function(evt){
    if(evt.keyCode === 13){
      var inputStr = document.querySelector("#input");
      var userMessage = {name: userName, newMessage: inputStr.value, color: userColor};
      var info = JSON.stringify(userMessage);
    ws.send(info);
    input.value = " ";
  }
});
});
*/
