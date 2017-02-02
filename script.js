
// for these you could come up with a separate class called "hide" or something similar with "display: none"
// that's already attached to these elements in the html, then you could remove that class when needed
$("#mybox").hide()
$("#hang").hide()
$("#hang1").hide()
$("#hang2").hide()
$("#end").hide()
$("#win").hide()
$(document).ready(function() {

    confirm("Welcome to Hangman!");


    var res = prompt("Player one, please type in a word.");

    for (var i = 0; i < res.length; i++) {
        $("main").append("<button></button>");
    }
    alert("Player two it is now your turn to guess");

    var winCounter = 0;
    var loseCounter = 0;

// key press is nice functionality, you could create a named function that this runs instead of incapsulitating everything in one function
    document.onkeypress = function(e) {
        // run another function based on a match or no match
        if (res.includes(e.key)) {
            alert("Nice! you got a letter.");
            for (var i = 0; i < res.length; i++) {
                if (res[i] === e.key) {
                    $("button").eq(i).html(res[i]);
                    winCounter++;
                    // break this if statement into a separate function that runs every time there is a match instead of nesting it
                    if (winCounter === res.length) {
                      $("#hang2").hide()
                      $("#hang1").hide()
                      $("hang").hide()
                      $("#win").show()
                      // could try using modals instead of alert boxes
                        alert("Congratulations!!! You got the word right.");
                    }
                }
            }
        } else {
          // Here you could try using an array of arrays to access this function
          // for example var loseOptions = [[$("#hang2").show(),confirm("It's okay keep trying")],[confirm("You still have four more attempts"),$("#hang2").hide(),
          // $("#hang1").show(), alert("Oh look a nuse!")]]
          // then you could access each value after a turn by loseOptions[loseCounter][1] or loseOptions[loseCounter][2]

            loseCounter++;
            alert("Sorry! You got a letter wrong.")
            $('#lettersWrong').append(e.key + " ")
            var c = document.getElementById("hangarea");
            var ctx = c.getContext("2d");
            if (loseCounter === 1) {
                $("#hang2").show()
                confirm("It's okay keep trying")

            }
            if (loseCounter === 2) {
                confirm("You still have four more attempts")
                $("#hang2").hide()
                $("#hang1").show()
                alert("Oh look a nuse!")

            }
            if (loseCounter === 3) {
                confirm("your attempts are running out! 3 more left")
                var word = prompt("Player one please type in a hint")
                $("#mybox").show()
                $("#mybox").val(word)


            }
            if (loseCounter === 4) {
                confirm("2 more attempts left")
                $("#hang1").hide()
                $("#hang").show()
                alert("now it's getting serious!")


            }
            if (loseCounter === 5) {
                confirm("this is your last attempt or it's game over!!")

            }
            if (loseCounter === 6) {
                $("#hang").hide()
                $("#end").show()
                alert("you lose. now you're dead.")
                var end = $("html")
                end.on("keypress", function() {
                    $("html").hide()
                })
            }
        }
      }
//       var reset = $("#reset")
// var start = $("#start")
// var pause= $("#pause")
//
// var seconds = 0
// var timerId
//
//
//
//
// function updateTime(){
//   seconds++
//   $("#timer").html(seconds)
// }
//
// reset.on("click", function(){
//   clearInterval(timerId)
//   seconds = 0
//   $("timer").html("stop watch")
//
//
// })
//
//
// start.on("click", function(){
//     $("#timer").html(seconds)
//   timerId = setInterval(updateTime, 1000)
// })
//
// pause.on("click", function(){
//     clearInterval(timerId)
// })
//
// function updateTime(){
//   seconds++
// }

})
