
const express = require("express");
const router = express.Router();

const reviews = require("../data/reviews.json");

router.get("/", async (request, response) => {
  
  try {
    response.send(reviews);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (request, response) => {
  const  {id} =request.params;

 
  const reviewId = reviews.find((review) => review.id === parseInt(id));
    if (!reviewId) {
      response.status(404).json({ error: `Rewview with id ${id} not found` });
    } else {
      response.json(reviewId);
    }
});

module.exports = router;