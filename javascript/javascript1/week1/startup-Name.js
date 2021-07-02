const firstWords = ["Easy", "Awesome", "Corporate"];
const secondWords = ["Pease", "Lemone", "Squeezy"];

const randomNumber = Math.floor(Math.random() * 2);
const randomNumber2 = Math.floor(Math.random() * 2);

const startupName = firstWords[randomNumber].concat(secondWords[randomNumber2]);
console.log(startupName);
