var numberOfDrumButtons = document.querySelectorAll(".drum").length;

const audiow = new Audio("sounds/crash.mp3");
const audioa = new Audio("sounds/kick-bass.mp3");
const audios = new Audio("sounds/snare.mp3");
const audiod = new Audio("sounds/tom-1.mp3");
const audioj = new Audio("sounds/tom-2.mp3");
const audiok = new Audio("sounds/tom-3.mp3");
const audiol = new Audio("sounds/tom-4.mp3");

for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        checkKeys(buttonInnerHTML);

    })
}

document.addEventListener("keydown", function(event) {

    checkKeys(event.key);
    // console.log(event.key);
});

function colorPressed(key) {
    const elementColor = document.getElementById(key);
    elementColor.style.color = "white"
    setTimeout(() => {  elementColor.style.color = "#DA0463"; }, 100);
}

function checkKeys(something) {

    switch (something) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            colorPressed(something);
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            colorPressed(something);
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            colorPressed(something);
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            colorPressed(something);
            break;

        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            colorPressed(something);
            break;

        case "k":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            colorPressed(something);
            break;

        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            colorPressed(something);
            break;

    }

}