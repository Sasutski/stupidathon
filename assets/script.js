// This function clears all the values
function clearScreen() {
    document.getElementById("result").value = "";
}
 
// This function displays the values
function display(value) {
    document.getElementById("result").value += value;
}
 
// This function evaluates the expression and returns the result
function calculate() {
    var number = Math.floor(Math.random() * 3) + 1;
    if (number === 1) {
        var audio = document.getElementById("1");
        document.getElementById("result").value = "Are you dumb?";
    } else if (number === 2) {
        var audio = document.getElementById("2");
        document.getElementById("result").value = "Divide, not disappoint!";
    } else if (number === 3) {
        var audio = document.getElementById("3");
        document.getElementById("result").value = "1+1=7.44";
    } 
    audio.play();
    audio.addEventListener("ended", function() {
       window.location.href = "equation.html";
    });
}

function calculate1() {
    var number = Math.floor(Math.random() * 101);
    document.getElementById("result").value = number;
}

function playAudio() {
    var audio = document.querySelector('audio');
    audio.play();
}

function options1() {
    window.location.href = "equation.html";
}

function options2() {
    window.location.href = "riggedcal.html";
}

