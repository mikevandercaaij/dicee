var dice1 = document.querySelector(".img1");
var dice2 = document.querySelector(".img2");
var title = document.querySelector("h1");

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

dice1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
dice2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
    title.innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    title.innerHTML = "Player 2 Wins! 🚩";
} else {
    title.innerHTML = "Draw!";

}

console.log(randomNumber1);
console.log(randomNumber2);