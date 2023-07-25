var num1  = Math.floor(Math.random() * 3) ;
var num2  = Math.floor(Math.random() * 3) ;
console.log("num1-> "+ num1 +" num2-> "+num2);

var choices = ["rock","paper","scissor"];
var val1 = choices[num1];
var val2 = choices[num2];

var rock = "images/rock.png";
var scissor = "images/scissor.jpeg";
var paper = "images/paper.png";

if(val1 === "rock"){
    document.querySelectorAll("img")[0].setAttribute("src",rock);
}
else if(val1 === "scissor"){
    document.querySelectorAll("img")[0].setAttribute("src",scissor);
}else{
    document.querySelectorAll("img")[0].setAttribute("src",paper);
}

if(val2 === "rock"){
    document.querySelectorAll("img")[1].setAttribute("src",rock);
}
else if(val2 === "scissor"){
    document.querySelectorAll("img")[1].setAttribute("src",scissor);
}else{
    document.querySelectorAll("img")[1].setAttribute("src",paper);
}

if(val1 === "rock" && val2 ==="scissor"){
    document.querySelector("h2").innerHTML = "Player 1 Won!!!";
}else if(val1 ==="scissor" && val2=== "paper"){
    document.querySelector("h2").innerHTML = "Player 1 Won!!!";
}else if(val1 === "paper" && val2 === "rock"){
    document.querySelector("h2").innerHTML = "Player 1 Won!!!";
}else if(val1 === "scissor" && val2 === "rock"){
    document.querySelector("h2").innerHTML = "Player 2 Won!!!";
}else if(val1 === "paper" && val2 === "scissor"){
    document.querySelector("h2").innerHTML = "Player 2 Won!!!";
}else if(val1 === "rock" && val2 === "paper"){
    document.querySelector("h2").innerHTML = "Player 2 Won!!!";
}else{
    document.querySelector("h2").innerHTML = "DRAW";
}