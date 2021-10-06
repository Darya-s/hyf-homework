let myName = "";
let toDo = [];

function getReply(command) {
    let arr = command.split(" ");

    if (command.toLowerCase().includes("hello")) {
        myName = arr[arr.length - 1];
        return `Nice to meet you ${myName}`;
    } else if (command.toLowerCase().includes("my name")) {
        if (myName != "") {
            return `Your name is ${myName}`;
        } else {
            return "Your name is unknown";
        }
    } else if (command.toLowerCase().includes("add")) {
        arr.shift(arr[0]);
        let list = "";

        for (let i = 0; i < 3; i++) {
            arr.pop(arr[arr.length - 1]);
        }

        for (let j = 0; j < arr.length; j++) {
            list += arr[j] + " ";
        }
        toDo.push(list);
        return `Added '${list}' to your todo list, ${myName}`;
    } else if (command.toLowerCase().includes("remove")) {
        arr.shift(arr[0]);
        let todo = " ";

        for (let i = 0; i < 3; i++) {
            arr.pop(arr[arr.length - 1]);
        }

        for (let j = 0; j < arr.length; j++) {
            todo += arr[j] + " ";
        }

        let removeItem = toDo.splice(todo, 1);
        return `Removed '${removeItem}' from your todo, ${myName}`;
    } else if (command.toLowerCase().includes("on my todo?")) {
        return `You have ${toDo.length} todo things.In ${myName}'s to do List : [${toDo}]`;
    } else if (command.toLowerCase().includes("is it today?")) {
        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        const today = new Date();
        var day = String(today.getDate());
        var year = today.getFullYear();
        return `Today is ${day}th of ${months[today.getMonth()]} ${year}`;
    } else if (command.toLowerCase().includes("what is")) {
        const match = command.match(/(\d+)\s*([\+\-\*\/])\s*(\d+)/);
        if (match) {
            if (match[2] === "+") {
                result = parseInt(match[1]) + parseInt(match[3]);
            }
            if (match[2] === "-") {
                result = parseInt(match[1]) - parseInt(match[3]);
            }
            if (match[2] === "*") {
                result = parseInt(match[1]) * parseInt(match[3]);
            }
            if (match[2] === "/") {
                result = parseInt(match[1]) / parseInt(match[3]);
            }
            return result;
        } else {
            return "Wrong syntax inserted";
        }
    } else if (command.toLowerCase().includes("minutes")) {
        let match = command.match(/\d+/);
        if (match[0]) {
            return `Timer set for ${match[0]} minutes`;
        }

        setTimeout(function() {
            return "Timer done";
        }, match[0]);
    } else {
        return "Error";
    }
}

console.log(getReply("Hello my name is Darya"));
console.log(getReply("What is my name?"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Add make homework"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("what is 2 + 2"));
console.log(getReply("what is 5 - 3"));
console.log(getReply("what is 2 * 3"));
console.log(getReply("what is 9 / 3"));
console.log(getReply("what is 4 * 12"));
console.log(getReply("Set a timer for 1 minutes"));
console.log(setTimeout(getReply()));