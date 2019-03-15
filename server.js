'use strict';

//add dotenv library
require('dotenv').config();

// adds express to work as server tools. Per David 'heavy lifting'
const express = require('express');
const app = express();

const PORT  = process.env.PORT || 3000;

//tell express where to find our index.html
app.use(express.static('./public'));

//routing

//hello route for express to lisiten to
app.get('/hello', (request, response)=> {
  response.status(200).send('Hello');
});

app.get('/data', (req, res)=> {
  let airplanes = {
    departure: Date.now(),
    canFly: true,
    pilot: 'Well trained'
  }

  res.status(200).json(airplanes);
});

// Catch all for routes that dont exsist
app.use('*', (req, res)=> res.send('Sorry this route does not exsist'));

//turn on the server so it can lisiten on the PORT
app.listen(PORT, ()=> console.log(`Lisitening on port ${PORT}`));
