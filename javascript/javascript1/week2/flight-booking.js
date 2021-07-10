getFullname = (fullname1, fullname2, useFormalName) => {
  if ((fullname1 || fullname2) === "") {
    console.log("error, type firstname and lastname");
  } else if (useFormalName) {
    console.log("Lord" + " " + fullname1 + " " + " " + fullname2);
  } else {
    console.log(fullname1, fullname2);
  }
};
getFullname("", "", false);
getFullname("AAA", "BBB", true);

//to solve problem with "Lord" male or femle, I would like parametr gender to getFullname function, and check it with if statement
