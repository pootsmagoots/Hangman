// $(document).ready(function(){
//
// confirm("Are you ready to play?");
//
// $("button").on("click",function(){
//   alert("Let the game begin!")
// })
//
// var str = prompt("please enter a word!")
// var res = str.split("");
// for(i = 0; i < res.length; i++){
// $("Main").append("<div>_</div>");
// }
//
//
// })
// $(document).on("keyup", function(e){
//   // var keyEntry = e.key;
//   // for(e.key = 0; e.key < res.length; e.key++){
//   // }
//   console.log()
//
// // })


$(document).ready( function(){

alert("Welcome to Hangman!");

var res = prompt("Player one, please type in a word.");

for (var i = 0; i < res.length; i++){
$("main").append("<button></button>");
}
alert("Player two it is now your turn to guess");

var winCounter = 0;
var loseCounter = 0;

document.onkeypress = function(e) {
 if (res.includes(e.key)){
 alert("Nice! you got a letter.");
 for (var i = 0; i < res.length; i++){
 if (res[i] === e.key){
   $("button").eq(i).html(res[i]);
   winCounter++;
   if (winCounter === res.length){
     alert("Congratulations!!! You got the word right.");
   }
 }
 }
} else {
 loseCounter++;
 alert("Sorry! You got a letter wrong.")
 $('#lettersWrong').append(e.key + " ")
 var c=document.getElementById("myCanvas");
 var ctx=c.getContext("2d");
 if (loseCounter === 1){
 ctx.beginPath();
 ctx.arc(150,15,15,0,2*Math.PI);
 ctx.stroke();
 }
 if (loseCounter === 2){
 ctx.beginPath();
 ctx.moveTo(150, 30);
 ctx.lineTo(150, 85);
 ctx.lineWidth = 5;
 ctx.stroke();
 }
 if (loseCounter === 3){
 ctx.beginPath();
 ctx.moveTo(150, 50);
 ctx.lineTo(100, 20);
 ctx.lineWidth = 3;
 ctx.stroke();
 }
 if (loseCounter === 4){
 ctx.beginPath();
 ctx.moveTo(150, 50);
 ctx.lineTo(200, 20);
 ctx.stroke();
 }
 if (loseCounter === 5){
 ctx.beginPath();
 ctx.moveTo(150, 84)
 ctx.lineTo(100, 115)
 ctx.stroke();
 }
 if (loseCounter === 6){
   ctx.beginPath();
   ctx.moveTo(150, 84)
   ctx.lineTo(200, 115)
   ctx.stroke()
   alert("you lose. now you're dead.")
 }
 }
}
})
//
// // for(i = 0; i < res.length; i++){
// // console.log(res[i])
// // research find or $.inArray(thingYouAreLookingFor, arrayThatYouAreSearching)
// // }
//
// //   for(i = 0; i < res.length; i++){
// //
// //
// // })
// //
//
//
//
// // $("main").keypress(function(){
// //   display(res).text(i += 1);
// //
// // })
//
//
// //
// // var ctx = canvas.getContext('2d');
// //
// // $(".blank").append()
