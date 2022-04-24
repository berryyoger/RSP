const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
const body = document.querySelector('body')

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

body.background = `img/${chosenImage}`

document.body.appendChild(bgImage);