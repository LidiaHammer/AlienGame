var x = [];

var counter = 0;

function makeShapeAppear() { //randomizes position and size of the ufo.
    if (counter <= 2) { //only 3 trys.

        var top = Math.random() * 50;
        var left = Math.random() * 70;
        var size = Math.random() * 10 + 7;

        document.getElementById("enemy").style.top = top + "%";
        document.getElementById("enemy").style.left = left + "%";
        document.getElementById("ufo").style.width = size + "rem";
        document.getElementById("enemy").style.display = "block";

        start = new Date().getTime();
        counter++;
    }
}

function appearAfterDelay() {
    setTimeout(makeShapeAppear, Math.random() + 1000); //ship appears after 1000ms (1sec)

}

document.getElementById("home").onclick = function() {

    document.getElementById("boxEnd3").style.visibility = "hidden";
    document.getElementById("boxEnd2").style.visibility = "hidden";

    var time = 3;
    var countTime = setInterval(function() {
        if (time <= 0) {

            clearInterval(countTime);
            document.getElementById("countdown").innerHTML = "START";
            appearAfterDelay();

        } else {
            document.getElementById("countdown").innerHTML = time;
        }

        time -= 1;

    }, 1000);

}

function getSum(total, num) { //function needed to calculate sum
    return total + num;
}

function myFunction(item) { //calculates sum and prints result

    if (x.length == 3) {
        if (x.reduce(getSum, 0) < 4) {

            var a = x.reduce(getSum, 0)

            document.getElementById("timeTaken").innerHTML = "YOU SAVE THE WORLD IN " + a.toFixed(2) + " SEC!"
            document.getElementById("gameFin").innerHTML = "YOU WON!!!";

        } else {

            var b = x.reduce(getSum, 0)

            document.getElementById("timeTaken").innerHTML = "YOU TOOK TO LONG! " + b.toFixed(2) + " SEC!"
            document.getElementById("gameFin").innerHTML = "YOU FAILED!!! THE WORLD HAS ENDED!";
            document.getElementById("gameFin").style.color = "red";
        }
        var y = 100; //if someone needs more then 100 sec for a try, it doesnt work
        for (var i = 0; i <= x.length; i++) {
            if (y > x[i]) {
                var y = x[i];
            }
        }

        document.getElementById("fastesttry").innerHTML += "YOUR BEST KILL " + y.toFixed(2) + " SEC!";
    }
}

document.getElementById("enemy").onclick = function() {

    document.getElementById("enemy").style.display = "none";
    document.getElementById("countdown").style.display = "none";
    var end = new Date().getTime();
    var timeTaken = (end - start) / 1000;
    x.push(timeTaken);
    document.getElementById("timecount").innerHTML += timeTaken.toFixed(2) + " SEC, ";
    myFunction();
    appearAfterDelay();
}