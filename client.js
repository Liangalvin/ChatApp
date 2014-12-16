//var ws = new WebSocket("ws://localhost:3000");
var ws = new WebSocket("ws://alvin.princesspeach.nyc:3000");

var ul = document.createElement("ul");
var body = document.querySelector("body");
var div = document.querySelector("div");
div.appendChild(ul);

ws.addEventListener("open", function(evt){
  var userName = prompt("GIVE ME YOUR PHUCKING NAME").trim();
  var sendIt = function(person){
  //  var userMessage = {name: userName};
    jsName["name"]= userName;
    console.log(userMessage);
    var jsNamed = JSON.stringify(jsName); //jsName.name
    //console.log(jsNamed.name)
    ws.send(userMessage);
    console.log(userMessage.name);
    //console.log(jsName);
  }
    var userColor = prompt("pick a color");

    //addText('Current Status: Connected');
    var addText = function(msg){
      var newli = document.createElement("li");
      var mssg = JSON.parse(msg);
      var printMessage = mssg.name + ": " + mssg.newMessage;
      //console.log(mssg);
      var parseMessage = mssg.newMessage.trim();
      console.log(parseMessage);
      var msgAry = parseMessage.split(" ");
      input.value = " ";
      for(var i = 0; i < msgAry.length; i++){
        if(msgAry[i] === "!yell"){
          msgAry.splice(i, 1);
          //console.log(msgAry);
          for(var i = 0 ; i < msgAry.length; i++){
            msgAry[i] = msgAry[i].toUpperCase();
            //console.log(msgAry);
            printMessage = "<li>" + mssg.name + ": " + msgAry.join(" ") + "!" + "</li>";
          }
        }
        else if (msgAry[i] === "!kurbee"){
          msgAry.splice(i, 1);
          msg = ("<(''<) (^''^) (>'')> <(''<) (^''^) (>'')>   <<< LOOK AT KIRBY GO!")
          printMessage = "<li>" + mssg.name + ": " + msg + "<li>";
        }
      }

      newli.style.color = mssg.color;

      newli.innerHTML = printMessage;
      var firstli = ul.firstChild;
      ul.insertBefore(newli, firstli);
      //ul.appendChild(newli);
    }

  ws.addEventListener("message", function(evt){
    addText(evt.data);
//});

    var picParse = JSON.parse(evt.data);
    var createLi = document.createElement("li");
    ul.appendChild(createLi);
    var picMsg = picParse.newMessage;

    var fourChar = picMsg.substring(0, 5).trim();
    if (fourChar === "http"){
      var length = picMsg.length;
      console.log(length);
      var lastThree = picMsg.substring(length-3, length);
      console.log(lastThree);
      if (lastThree === "png" || lastThree === "jpg" || lastThree === "bmp" || lastThree === "gif"){
        innerMessage = "<img src='" + picMsg +"'>";
      }
      else{
        innerMessage = "<a href='" + picMsg + "'>" + picMsg + "</a>";
        //console.log(innerMessage);
      }
      createLi.innerHTML = innerMessage;
      //console.log(innerMessage);
    }
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
