const express = require("express");
const app = express();

app.get('/numbers/add?', async (req, res) => {
    const first=req.query.first;
    const second=req.query.second;
    const sum= (parseInt(first))+(parseInt(second));
    res.json(sum);
});

app.get('/numbers/multiply/:first/:second', function (req, res)  {

    
   let first=req.params['first'];
   let second=req.params['second'];
   let multiplied= first*second;
   res.json(multiplied);
   });

module.exports =app;

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));




