



function volumeInMeters(width,height,depth){
    return width*height*depth;
};

 function gardenSizeInM2(gardenSize){
     Math.pow(gardenSize , 2);}


let petersHouse=(volumeInMeters(8,10,10)*2.5*1000 + gardenSizeInM2(100)*300);

if(petersHouse>2500000){
    console.log("Peter is paying too much!")
}
else if(petersHouse<2500000){
    console.log("Peter is paying too little")
}

let juliasHouse=(volumeInMeters(5,8,11)*2.5*1000 + gardenSizeInM2(70)*300);

if(juliasHouse>2500000){
    console.log("Julia is paying too much!")
}
else if(juliasHouse<2500000){
    console.log("Julia is paying too little")
}



