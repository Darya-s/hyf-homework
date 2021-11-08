const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );

app.get("/", (req, res) => res.send("nodejs week3 homework"));




app.get('/calculator/multiply/', async (req, res ,next) => {
    const querys=req.query;
    const values = Object.values(querys);
    let result = values.reduce((a, b) => parseInt(a) * parseInt(b));


    res.send(`${result}`);
});

app.get('/calculator/division/', async (req, res ,next) => {
    const querys=req.query;
    const values = Object.values(querys);
    let result = values.reduce((a, b) => parseInt(a) / parseInt(b));


    res.send(`${result}`);
});

app.get('/calculator/add/', async (req, res ,next) => {
    const querys=req.query;
    const values = Object.values(querys);
    let result = values.reduce((a, b) => parseInt(a) + parseInt(b));


    res.send(`${result}`);
});

app.get('/calculator/substract/', async (req, res ,next) => {
    const querys=req.query;
    const values = Object.values(querys);
    let result = values.reduce((a, b) => parseInt(a) - parseInt(b));


    res.send(`${result}`);

});


/*
app.post("/calculator/multiply", (req, res) => {
  const query = req.body;
  const keys = Object.values(query);
  let result = parseInt(keys[0]) * parseInt(keys[1]);
  res.send(`Result of multiplication: ${result}`);
});*/
app.post("/calculator/multiply", (req, res) => {
  const query = req.body;
  const keys = Object.values(query);
 
  const result = parseInt(keys[0]) * parseInt(keys[1]);
  res.send(` Multiply result: ${result}`);
});

app.post("/calculator/division", (req, res) => {
  const query = req.body;
  const keys = Object.values(query);
  const result=parseInt(keys[0]) / parseInt(keys[1]);
  res.send(`Division result : ${result}`);
 
});


app.listen(3000, () => console.log(`Calculator:listening on port 3000`));

module.exports =app;


