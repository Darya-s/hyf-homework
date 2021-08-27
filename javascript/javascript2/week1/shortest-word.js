//Find the shortest word
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

function shortestString(arr) {
    let shortest = arr[0].length;
    arr.map((v) => (shortest = Math.min(shortest, v.length)));
    result = arr.filter((v) => v.length == shortest);
    return result;
}

console.log(shortestString(danishWords)); * /

//Find the individual number and the total number of Danish letters in a string.

const danishString = "Jeg har en blå bil"; // returns {total: 1, å: 1}
const danishString2 = "Blå grød med røde bær"; // returns {total: 4, æ: 1, ø: 2, å: 1}


function findingLetter(dkstring) {
    let a = 0;
    let o = 0;
    let ae = 0;
    let tot = 0;
    let temp = "";

    a = (dkstring.match(/å/g) || []).length;

    o = (dkstring.match(/ø/g) || []).length;
    ae = (dkstring.match(/æ/g) || []).length;
    tot = a + o + ae;
    temp = " total: " + tot + "     å: " + a + "     ø :" + o + "    æ:" + ae;

    return temp;
}

console.log("String 1 ==> " + findingLetter(danishString));
console.log("String2 ==>  " + findingLetter(danishString2));