
var user ="";

socket.on("username",function(id){
	user= id;
})

  function addText(){
  var textvalue = document.getElementById("input").value;
  var chatbox = document.getElementById("ul");
  var tonumber = Number((input.value).length);
  var br = document.createElement("BR");
  var circle = document.createElement("span");
  circle.innerHTML = "You";
  circle.setAttribute("display","inline-block");
  circle.style.marginLeft ="-30px";
  circle.style.position="relative"
  circle.style.top ="-70px"
  var para = document.createElement("li");
  para.style.width = tonumber+ 100 +"px";
  para.style.height = tonumber+ 100 +"px";
  para.style.borderRadius  =  10 +"px";
  para.style.marginLeft="30px"
  var textnode = document.createTextNode(textvalue);
  para.appendChild(textnode);
  chatbox.appendChild(para);
  chatbox.appendChild(circle)
  chatbox.appendChild(br)
 document.getElementById("chatbox").scrollTop+=400;
 socket.emit("data",textnode)
 document.getElementById("input").value ="";
 socket.emit("sendmsg",textvalue);
  }
  
  function receiveText(message){
    var textvalue = message;
  var chatbox = document.getElementById("ul");
  var tonumber = Number((input.value).length);
  
  var br = document.createElement("BR");
  var circle = document.createElement("span");
  circle.innerHTML = "	guest";
  circle.setAttribute("display","inline-block");
  circle.style.left = "83%"
  circle.style.position="relative"
  circle.style.top ="-50px"
  var para = document.createElement("li");
  para.className += "li";
  para.style.width = tonumber+ 100 +"px";
  para.style.height = tonumber+ 100 +"px";
  para.style.borderRadius  =  10 +"px";
  var textnode = document.createTextNode(textvalue);
  para.appendChild(textnode);
  chatbox.appendChild(para);
  chatbox.appendChild(circle)
  chatbox.appendChild(br);
  para.style.marginLeft= "40%"
 document.getElementById("chatbox").scrollTop+=400;
  }
  
socket.on("receivemsg",function(data){
receiveText(data);
})



