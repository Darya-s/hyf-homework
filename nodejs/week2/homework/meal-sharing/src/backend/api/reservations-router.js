const express = require("express");
const router = express.Router();

const reservations = require("../data/reservations.json");

router.get("/", async (request, response) => {
3
    response.send(reservations);
  try {
    console.log(reservations);
    console.log("in /api/reservations");
  } catch (error) {
    throw error;

    
  try {
    response.send(reservations);
  } catch (error) {
    console.log(error);

  }
});

router.get("/:id", async (request, response) => {
  const  {id} =request.params;

 
  const reservationId = reservations.find((reservation) => reservation.id === parseInt(id));
    if (!reservationId) {
      response.status(404).json({ error: `Reservation with id ${id} not found` });
    } else {
      response.json(reservationId);
    }
});

module.exports = router;