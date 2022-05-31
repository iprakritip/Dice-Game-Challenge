var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomImage = "images/dice"+ randomNumber1 +".png";
var image1 = document.querySelector("img.img1"); //why use querySelectorAll instead of querySelector if we are gonna do it twice?
image1.setAttribute("src", randomImage);
//console.log(randomNumber1, randomImage, image1)
// console.log("yo chai query all",image1);
// console.log("yo chai just query selector", document.querySelector("img.img1"));

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImage = "images/dice"+ randomNumber2 +".png";
var image2 = document.querySelector("img.img2");
image2.setAttribute("src", randomImage);

if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "Congrats, Player1 wins."
} else if (randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML = "Congrats, Player2 wins."
} else {
  document.querySelector("h1").innerHTML = "OOpsie, issa tie."
}
