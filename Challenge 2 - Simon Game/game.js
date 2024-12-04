var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

//Adds random color to the sequence
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    button = $("#" + randomChosenColor);
    button.fadeOut(100);
    var audio = new Audio("./sounds/" + randomChosenColor + ".mp3");
    audio.play();
    button.fadeIn(100);
}