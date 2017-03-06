$("#mybox").hide()
$("#hang").hide()
$("#hang1").hide()
$("#hang2").hide()
/// you could also give the hanging-man elements a hangman class and then do $('.hangman').hide()
$("#end").hide()
$("#win").hide()

$(document).ready(function() {

  confirm("Welcome to Hangman!");
  ///just alert here would suffice. confirm gives you "ok" & "cancel" buttons

  var res = prompt("Player one, please type in a word.");

  for (var i = 0; i < res.length; i++) {
    $("main").append("<button></button>");
  }
  alert("Player two it is now your turn to guess");

  var winCounter = 0;
  var loseCounter = 0;

  // $(document).on("keypress", function(e){
  //   //...
  // })

  ///I love that you can just use keypresses to guess letters. just a note, this is the vanilla way.
  document.onkeypress = function(e) {
    /// add res=res.toLowerCase() in case someone adds a captial letter
    if (res.includes(e.key)) {

      alert("Nice! you got a letter.");
      for (var i = 0; i < res.length; i++) {
        if (res[i] === e.key) {
          $("button").eq(i).html(res[i]);
          winCounter++;
          if (winCounter === res.length) {
            ///might make this into a win function
            $("#hang2").hide()
            $("#hang1").hide()
            $("hang").hide()
            $("#win").show()
            alert("Congratulations!!! You got the word right.");
          }
        }
      }
    } else {
      loseCounter++;
      console.log(loseCounter);
      alert("Sorry! You got a letter wrong.")
      $('#lettersWrong').append(e.key + " ")
      ///remove the 2 lines below since you aren't using the canvas
      var c = document.getElementById("hangarea");
      var ctx = c.getContext("2d");

      ///refactor the below into a switch statement
      if (loseCounter === 1) {
        $("#hang2").show()
        confirm("It's okay keep trying")

      } else if (loseCounter === 2) {
        confirm("You still have four more attempts")
        $("#hang2").hide()
        $("#hang1").show()
        ///spelling is noose, also
        alert("Oh look a nuse!")
      } else if (loseCounter === 3) {
        /// could have attemptsLeft variable, e.g.:
        // attemptsLeft = 6-loseCounter
        confirm("your attempts are running out! 3 more left")
        /// cool feature
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


///Switch statement for reference
        // switch (loseCounter){
        //   case 1:
        //     $("#hang2").show()
        //     confirm("It's okay keep trying")
        //     break;
        //   case 2:
        //     confirm("You still have four more attempts")
        //     $("#hang2").hide()
        //     $("#hang1").show()
        //     ///spelling is noose, also
        //     alert("Oh look a nuse!")
        //     break;
        // }

      }
    }
  }

  //this looks like working code that wasnt integrated into the app. i'd remove it or implement the feature

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
