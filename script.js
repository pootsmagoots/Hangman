$(document).ready(function() {
    $("input").hide()
    $("#hang").hide()
    confirm("Welcome to Hangman!");

    var res = prompt("Player one, please type in a word.");

    for (var i = 0; i < res.length; i++) {
        $("main").append("<button></button>");
    }
    alert("Player two it is now your turn to guess");

    var winCounter = 0;
    var loseCounter = 0;

    document.onkeypress = function(e) {
        if (res.includes(e.key)) {
            alert("Nice! you got a letter.");
            for (var i = 0; i < res.length; i++) {
                if (res[i] === e.key) {
                    $("button").eq(i).html(res[i]);
                    winCounter++;
                    if (winCounter === res.length) {
                        alert("Congratulations!!! You got the word right.");
                    }
                }
            }
        } else {
            loseCounter++;
            alert("Sorry! You got a letter wrong.")
            $('#lettersWrong').append(e.key + " ")
            var c = document.getElementById("hangarea");
            var ctx = c.getContext("2d");
            if (loseCounter === 1) {
                confirm("It's okay keep trying")

            }
            if (loseCounter === 2) {
                confirm("You still have four more attempts")
                $("#hang").show()
                alert("Oh look a nuse!")

            }
            if (loseCounter === 3) {
                confirm("your attempts are running out! 3 more left")
                var word = prompt("Player one please type in a hint")
                $("input").show()
                $("input").val(word)


            }
            if (loseCounter === 4) {
                confirm("2 more attempts left")

            }
            if (loseCounter === 5) {
                confirm("this is your last attempt or it's game over!!")

            }
            if (loseCounter === 6) {
                $("html").hide();
                alert("you lose. now you're dead.")
            }
        }
    }
})
