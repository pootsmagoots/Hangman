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
 var c=document.getElementById("cat");
 var ctx=c.getContext("2d");
 if (loseCounter === 1){
   confirm("It's okay keep trying")


 }
 if (loseCounter === 2){
   confirm("You still have four more attempts")

 }
 if (loseCounter === 3){
   confrim("you're attempts are running out! 3 more left")

 }
 if (loseCounter === 4){
   confirm("2 more attempts left")

 }
 if (loseCounter === 5){
   confirm("this is your last attempt or it's game over!!")

 }
 if (loseCounter === 6){

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
