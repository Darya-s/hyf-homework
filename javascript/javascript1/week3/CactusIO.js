const activities = [];
let totTime = 0;

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


function showStatus() {
  for (let i = 0; i < activities.length; i++) {
    totTime += activities[i].duration;
  }
  return totTime;
}*/

//IMPROVED SHOWSTATUS FUNCTION< TO SHOW ONLY AMOUNT OF ACTIVITIES extra future exercise PROBLEM: activity undefined, I could not find how to fix it.as it works for duration value extracting activities[i].duration;


  function showStatus(activities) {
    if (activities.length === 0) {
      console.log("Add some activities before calling showStatus");
      return;
    }

    let time = 0;
    for (let i = 0; i < activities.length; i++) {
      time += activities[i].duration;
    }
    console.log(
      `You have added ${activities.length} activities. They amount to ${time} min. of usage`
    );
  }



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
