const express = require('express');
const app = express();

let visitCount = 0;

app.get('/', (req, res) => {
  visitCount++;
  res.send(`Hello World! You have visited this app ${visitCount} times!`);
});

app.listen(3000);
