'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

// REVIEWED: POST route needs to parse the body passed in with the request. express.urlencoded() attaches "middleware" to do that
app.post('/articles', express.urlencoded(), function(request, response) {
  // REVIEWED: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.send('Record posted to server!!');
});

app.get('/pages', (request, response) => {
  response.sendFile('/new.html', {root: './public'});
});

app.use((request, response) => {
  response.sendFile('404.html', {root: './public'});
});

app.listen(PORT, () => console.log('Listening on Port 3000'));