/* console answer, You have added 9 activities. They amount to NaN min. of usage
cactusIO.js:34 undefined
HOw to fix this NaN and undefined? Also, it prints 9 activities instead of 3, so it goes through array 3 times,how to fix this?*/

let activities = [];
let totTime = 0;
let time = 0;
let limit = 120;
let act = 0;
let today = new Date();

/**
 * @type {number} duration */
function addActivity(date, activity, duration) {
    activities.push(date, activity, duration);
}

addActivity(today.toLocaleDateString("en-US"), "Twitch", 50);
addActivity(today.toLocaleDateString("en-US"), "Browser", 120);
addActivity(today.toLocaleDateString("en-US"), "Twitch", 90);

function showStatus() {
    if (activities.length == 0) {
        console.log("Add some activities before calling showStatus");
        return;
    }
    /**
     * @type {number} time */

    for (let i in activities) {
        time += activities[i].duration;
    }
    console.log(
        `You have added ${activities.length} activities. They amount to ${time} min. of usage`
    );
}

console.log(showStatus());