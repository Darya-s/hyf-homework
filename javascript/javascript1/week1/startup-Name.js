const firstWords= ["Easy", "Awesome", "Corporate"];
const secondWords=["Pease","Lemone","Squeezy"];
let startupName="";

let randomNumber = Math.floor(Math.random() * 2);


startupName=firstWords[randomNumber].concat(secondWords[randomNumber]);
console.log(startupName);