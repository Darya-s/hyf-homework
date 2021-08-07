let myName = "";
let toDo = [];
let toAdd = " ";
let toRemove = " ";
let today = new Date();
let extractName = " ";

function getReply(command) {
    if (command == "Hello my name is Darya".match(/Hello my name is (.*)/i)) {
        //extractName = command.split(" ");
        //myname = extractName[extractName.length - 1];
        myName = "Hello my name is Darya".match(/my name is (.*)/i)[0];
        return "Nice to meet you " + myName;
    } else if (command === "What is my name") {
        if (myName !== 0) return myName;
        else {
            ("Error");
        }
    } else if (command === "Add".match(/Add (.*)/i) / " to my todo") {
        toAdd = command[command.length - 4];
        toDo.push(toAdd);
        return toAdd + "added to your todo";
    } else if (command === "Remove".match(/Remove (.*)/i) / " from my todo") {
        toRemove == command[command.length - 4];
        for (let i = 0; i < toDo.length; i++) {
            if (toDo[i] === toRemove) {
                toDo.slice(toDo[i], 1);
                return toRemove + "was removed from your to do.";
            } else {
                return toRemove + "Not present in your to do list";
            }
        }
    } else if (command === "What is on my todo?") {
        return toDo;
    } else if (command === "What day is it today?") {
        return today.toDateString();
    }
}

console.log(getReply("Hello my name is Darya"));
console.log(getReply("What is my name"));
console.log(getReply("Add washingup to my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));