'use strict';

// load Express
const express = require('express');

// Instantiate Express so that we can use its functionality
const app = express();

// Designate a port to serve the app on
const PORT = process.env.PORT || 3000;

app.get('/articles', (request, response) => {
  response.sendFile('index.html', {root: './public'});
})
app.get('/new', (request, response) => {
  response.sendFile('new.html', {root: './public'});
})

// Define which directory we will serve files from
app.use(express.static('public'));



// REVIEW: POST route needs to parse the body passed in with the request. express.urlencoded() attaches "middleware" to do that
app.post('/articles', express.urlencoded(), function(request, response) {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.send('Record posted to server!!');
})

// Now let's tell the app to listen so that it can do its thing
app.listen(PORT, () => console.log('Listening on PORT', PORT));