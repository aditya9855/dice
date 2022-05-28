function shuffle() {
    const img = document.getElementById("img");
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber);
    img.setAttribute("src", `${randomNumber}.png`);
    document.getElementById("o").value
}
function guessNumber(){
    setTimeout(shuffle, 3000);
    const img = document.getElementById("img");
    img.setAttribute("src", "dice-anim.gif");
}
function dis(value)
{

    if(guessNumber == value){
        alert("congrats");

    }
    else{
        alert(" lose ");
    }
}
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {

    var threeSecond = 3,
        display = document.querySelector('#time');
    startTimer(threeSecond, display);

};