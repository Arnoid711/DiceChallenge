

// This is for player 1 random image //
var player1Random = Math.floor(Math.random() * 6) + 1;
var img1Random = "images/dice" + player1Random + ".png";
document.querySelector(".img1").setAttribute("src",img1Random);

// This is for player 2 random image //
var player2Random = Math.floor(Math.random() * 6) + 1;
var img2Random = "images/dice" + player2Random + ".png";
document.querySelector(".img2").setAttribute("src",img2Random);


//Conditions for changing the h1 //
if(player1Random === player2Random){
   document.querySelector("h1").innerHTML = "Draw";
 }else if(player1Random > player2Random){
   document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";

 }else if(player1Random < player2Random){
   document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
 }
