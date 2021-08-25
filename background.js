const backgrounds = ["0.jpeg","1.jpeg","2.jpeg"];

const background = backgrounds[Math.floor(Math.random() * backgrounds.length)];

const chosenImg = document.createElement("img");

chosenImg.src=`img/${background}`;

document.body.style.backgroundImage="url("+chosenImg.src+")";

