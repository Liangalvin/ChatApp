var ws = new WebSocket("ws://localhost:3000");
//var ws = new WebSocket("ws://alvin.princesspeach.nyc:3000");

var ul = document.createElement("ul");
var body = document.querySelector("body");
var div = document.querySelector("div");
div.appendChild(ul);

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
      //ul.appendChild(newli);
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
var userName = prompt("GIVE ME YOUR PHUCKING NAME").trim();
var sendIt = function(userName){
  var jsName = {name: userName, newMessage: "!connected", color: "black"};
//  jsName["name"]= userName;
  console.log(jsName);
  var jsNamed = JSON.stringify(jsName); //jsName.name
  //console.log(jsNamed.name)
  ws.send(jsNamed);
  console.log(jsNamed.name);
  //console.log(jsName);
}
  var userColor = prompt("pick a color");
