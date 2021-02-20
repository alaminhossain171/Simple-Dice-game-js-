var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);
var randomImage = "dice" + randomNumber1 + ".png";
var randomSource = "img/" + randomImage;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomSource);



var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);
var randomImage1 = "dice" + randomNumber2 + ".png";
var randomSource1 = "img/" + randomImage1;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomSource1);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 win!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 win!🚩";
} else {
    document.querySelector("h1").innerHTML = "🚩Draw!🚩";
}