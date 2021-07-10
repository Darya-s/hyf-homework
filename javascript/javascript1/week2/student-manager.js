const class07Students = [];
function addStudentToClass(studentName) {
  // You write code here

  if (class07Students.length > 6) {
    console.log("Cannot add more students to class 07");
  } else if (class07Students.length > 6 && studentName === "Queen") {
    console.log("Queen added as exeption");
  } else if (studentName === " ") {
    console.log("You are not adding any students");
  }

  for (i = 0; i <= class07Students.length; i++) {
    if (class07Students[i] === studentName) {
      console.log("Student " + studentName + " is already in the class");
    }
  }

  class07Students.push(studentName);
}

function getNumberOfStudents() {
  return class07Students.length;
}

addStudentToClass("Darya");
addStudentToClass("Florentina");
addStudentToClass("Divya");
addStudentToClass("Jiu");
addStudentToClass("Daniel");
addStudentToClass("Marie");
addStudentToClass("Queen");
addStudentToClass("Daniel");

console.log(class07Students);
console.log(getNumberOfStudents());
