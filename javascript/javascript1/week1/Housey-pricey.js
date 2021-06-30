

var gardenSize;

function volumeInMeters(width,height,depth){
    return width*height*depth;
};

 function gardenSizeInM2(gardenSize ){
     Math.pow(gardenSize , 2);}


var petersHouse=(volumeInMeters(8,10,10)*2.5*1000 + gardenSizeInM2(100)*300);

console.log(petersHouse);

var juliasHouse=(volumeInMeters(5,8,11)*2.5*1000 + gardenSizeInM2(70)*300);