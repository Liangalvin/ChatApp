var ws = new WebSocket("ws://localhost:3000");

var userName = prompt("GIVE ME YOUR PHUCKING NAME").trim();
var userColor = prompt("pick a color");

var ul = document.createElement("ul");
var body = document.querySelector("body");
body.appendChild(ul);

ws.addEventListener("open", function(evt){
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
