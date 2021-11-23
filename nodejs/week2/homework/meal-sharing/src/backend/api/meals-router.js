
const express = require("express");
const router = express.Router();

const meals = require("../data/meals.json");

router.get("/", async (request, response) => {

  try{
  
 let newMeals=meals;
 const { obj, maxPrice, searchTitle, createdAfter, limit } = request.query;

if (maxPrice || searchTitle || createdAfter || limit) {
  
  if (maxPrice) {
    newMeals=newMeals.filter((meal) => meal.price <= parseInt(maxPrice));
    response.json(newMeals);
  }

  // Get meals that partially match a title.
  if (searchTitle) {
    newMeals = newMeals.filter((meal) =>
      meal.title.toLowerCase().includes(searchTitle)
    );
  }

  // Get meals that has been created after the date
  if (createdAfter) {
    newMeals = newMeals.filter(
      (meal) => new Date(meal.createdAt) > new Date(createdAfter)
    );
  }

  // 	Only specific number of meals
  if (limit) {
    newMeals = newMeals.splice(0, limit);
  }
  response.json(newMeals);
} else if (
  obj && // 👈 null and undefined check
  Object.keys(obj).length !== 0
) {
  return response.send("Wrong!!! Please put correct query");
}


} catch (error) {
console.log( error);
}

});



router.get("/:id", async (request, response) => {
  try{
  const  {id} =request.params;

  let newMeals=meals;
  
  const mealId = meals.find((meal) => meal.id === parseInt(id));
    if (!mealId) {
      response.status(404).json({ error: `Meal with id ${id} not found` });
    } else {
      response.json(mealId);
    }

}


  catch{

console.log(error);
}

});
  
module.exports = router;
