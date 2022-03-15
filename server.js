const { response } = require("express");
const express = require("express");

const myObject = {
  name: "Luke",
};
const myObjectJSON = JSON.stringify(myObject);

const app = express();
const PORT = 5000;

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});


const hello2 = (req, res) => {
  res.send("Hello World! 2");
};
const hello3 = (req, res) => {
  res.send("ExpressJS Rulesz!!");
};
const hello4 = (req, res) => {
  res.send(myObject);
};

app.get("/", hello);
app.get("/2", hello2);
app.get("/3", hello3);
app.get("/4", hello4);
// creating functions and multiple query requests
app.get('/forest', (req, res) => {
    let daylight = req.query.daylight;
    let numberOfDragons = req.query.numberOfDragons;
    console.log(`daylight is (${daylight})`);

    let isDayLight = daylight === 'true'
    console.log(`is (${isDayLight})`);
  
    if (daylight === 'true') {
      res.send("You are in a deep, decently lit wood...");
    } else if (numberOfDragons === "true") {
        res.send("There are 420 dragons");
    } else {     
      res.send("You are in a deep, dark wood...");
    }
  });
// adding numbers from query
  app.get('/addNumbers', (req, res) => {
      // using + sign cmakes query be treated as a number
      x = +req.query.x;
      y = +req.query.y;
      let answer = x + y;
      let data = { x: x, y: y, answer: x + y};
      res.send(data);
  });

  // storing some server stuff for game
  const hobby = (hobby) =>
  {
   if (hobby === 'BIKE') {
     res.send("Player loves biking");
   } else if (hobby === 'SWIM') {
   res.send("Player loves swimming");
  } else {
    res.send("Player is a lameo");
  }
 };