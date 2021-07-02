function volumeInMeters(width, height, depth) {
  return width * height * depth;
}

let volPeter = volumeInMeters(8, 10, 10) * 2.5 * 1000;
let gardenPeter = Math.pow(100, 2) * 300;
let petersHouse = volPeter + gardenPeter;

if (petersHouse > 2500000) {
  console.log("Peter is paying too much!");
} else if (petersHouse < 2500000) {
  console.log("Peter is paying too little!");
}

let volJulia = volumeInMeters(5, 8, 11) * 2.5 * 1000;
let gardenJulia = Math.pow(70, 2) * 300;

let juliasHouse = volJulia + gardenJulia;

if (juliasHouse > 2500000) {
  console.log("Julia is paying too much!");
} else if (juliasHouse < 2500000) {
  console.log("Julia is paying too little");
}
