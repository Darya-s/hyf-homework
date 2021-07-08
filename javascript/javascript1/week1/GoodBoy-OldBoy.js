const dogYearOfBirth = 2021;
const dogYearFuture = 2045;
const dogYear = dogYearFuture - dogYearOfBirth;
const shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears) {
  console.log("Your dog will be" + dogYear + "+human years old in" + 2027);
} else {
  console.log("Your dog will be" + dogYear * 10 + "+human years old in" + 2027);
}
