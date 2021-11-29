const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reviews =require("./data/reviews");
const reservations = require("./data/reservations");


const mealsReview = meals.map((meal) => {
  meal["review"] = reviews.filter((review) => {
    if (meal.id === review.mealId) {
      return review;
    }
  });
  return meal;
});

// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send(mealsReview);
});

app.get("/cheap-meals", async (request, response) => {

  const cheapMeals = mealsReview.map((meal) => {
    if (meal.price < 150) {
      return meal;
    }
  });
=======
  const cheapMeals = mealsReview.filter(meal.price<150); 

  response.send(cheapMeals);
});

app.get("/large-meals", async (request, response) => {

  const largeMeals = mealsReview.filter((meal) => {
    if (meal.maxNumberOfGuests > 15) {
      return meal;
    }
  });
=======
  const largeMeals = mealsReview.filter((meal) => meal.maxNumberOfGuests > 15);

  response.send(largeMeals);
});

app.get("/meal", async (request, response) => {
  const mealId = Math.floor(Math.random() * meals.length);
  const meal = mealsReview[mealId]
  response.send(meal);
});

app.get("/reservations", async (request, response) => {
  response.send(reservations);
});

app.get("/reservation", async (request, response) => {
  const reservationId = Math.floor(Math.random() * reservations.length);
  const reservation = reservations[reservationId]
  response.send(reservation);
});

module.exports = app;