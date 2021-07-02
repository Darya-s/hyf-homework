function volumeInMeters(width, height, depth) {
  return width * height * depth;
}

const volPeter = volumeInMeters(8, 10, 10) * 2.5 * 1000;
const gardenPeter = Math.pow(100, 2) * 300;
const petersHouse = volPeter + gardenPeter;

if (petersHouse > 2500000) {
  console.log("Peter is paying too much!");
} else if (petersHouse < 2500000) {
  console.log("Peter is paying too little!");
}

const volJulia = volumeInMeters(5, 8, 11) * 2.5 * 1000;
const gardenJulia = Math.pow(70, 2) * 300;

const juliasHouse = volJulia + gardenJulia;

if (juliasHouse > 2500000) {
  console.log("Julia is paying too much!");
} else if (juliasHouse < 2500000) {
  console.log("Julia is paying too little");
}
