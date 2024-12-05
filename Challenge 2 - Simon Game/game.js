var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var started = false;
var level = 0;

//Adds random color to the sequence
function nextSequence() {
    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    button = $("#" + randomChosenColor);
    button.fadeOut(100);
    playSound(randomChosenColor);
    button.fadeIn(100);
    level += 1;
    $("#level-title").html("Level " + level);
}

//Deals with user button selection
$(".btn").click(function() {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
});

//Plays sound depending on button color
function playSound(name) {
    var audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
}

//Animation for button press
function animatePress(currentColor) {
    theID = "#" + currentColor;
    $(theID).addClass("pressed");
    setTimeout(function() {
        $(theID).removeClass("pressed");
    }, 100)
}

//Starts the game by pressing any key
$(document).keydown(function() {
    if (started == false) {
        nextSequence();
        started = true;
    }
    $("#level-title").html("Level " + level);
})

//Checks if user input continues the game or ends it
function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (gamePattern.length === userClickedPattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000)
        }
    } else {
        var audio = new Audio("./sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200)
        $("#level-title").html("Game Over, Press Any Key to Restart");
        startOver();
    }
}

//Resets game stats
function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}