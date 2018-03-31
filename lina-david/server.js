'use strict';

const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/new', (request, response) => {
  response.sendFile('new.html', {root: './public'});
});

// REVIEWED: POST route needs to parse the body passed in with the request. express.urlencoded() attaches "middleware" to do that
app.post('/articles', express.urlencoded(), function(request, response) {
  // REVIEWED: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.send('Record posted to server!!');
})

app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

app.listen(PORT, () => console.log('Listening on PORT', PORT));
