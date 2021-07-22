const activities = [];
let totTime = 0;
let amount = 0;
let limit = 120;
let act = 0;
let today = new Date();

function addActivity(date, activity, duration) {
  activities.push({
    date: date,
    activity: activity,
    duration: duration,
  });
}

addActivity(today.toLocaleDateString("en-US"), "Facebook", 30);
addActivity(today.toLocaleDateString("en-US"), "Twitter", 90);
addActivity(today.toLocaleDateString("en-US"), "Twitch", 50);
addActivity(today.toLocaleDateString("en-US"), "Browser", 120);
addActivity(today.toLocaleDateString("en-US"), "Twitch", 90);

/* //First showStatus function, with time spent on smartphone t.
function showStatus() {
  for (let i = 0; i < activities.length; i++) {
    totTime += activities[i].duration;
  }
  return totTime;
}*/

//IMPROVED SHOWSTATUS FUNCTION< TO SHOW ONLY AMOUNT OF ACTIVITIES extra future exercise PROBLEM: activity undefined, I could not find how to fix it.as it works for duration value extracting activities[i].duration;
function showStatus() {
  for (let i = 0; i < activities.length; i++) {
    //console.log(activities[i].activity);
    if (activities[i].activity == activities[i + 1].activity) {
      //I do not understand how to fix problem of activity is undefined
      amount += 0;
    } else {
      amount++;
    }
  }
  return amount;
}

/*if (activities === undefined || activities.length == 0) {
  console.log("Add some activities before calling showStatus");
} else {
  console.log(
    "You have added " +
      activities.length +
      "activities. They amount to :" +
      showStatus(activities) +
      "minutes of usage"
  );
}

do {
  addActivity === true;
} while (showStatus(activities) < limit);
{
  console.log("You have reached your limit, no more smartphoning for you!");
}
*/
//Create a function for calculating the activity a user has spent the most time on.

function spentMost() {
  for (let j = 0; j < activities.length; j++) {
    if (activities[j].activity == activities[j + 1].activity) {
      act = activities[j].duration + activities[j + 1].duration;
    }
  }
  return act;
}

console.log(showStatus());
console.log(spentMost());
