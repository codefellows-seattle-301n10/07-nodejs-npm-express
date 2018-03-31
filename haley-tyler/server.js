'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('public'));

// COMMENT: Our files are in a public directory so that they can be accessible by the user. app.use() defines a middleware whose only purpose is to serve static files. 

// REVIEW: POST route needs to parse the body passed in with the request. express.urlencoded() attaches "middleware" to do that
app.post('/articles', express.urlencoded(),(request, response) => {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!

  console.log(request.body);
  response.send('Record posted to server!!');
});

// Serving new.html
app.get('/new', (request, response) => {
  response.sendFile('new.html', {root: './public'});
});

// Setting up 404
app.use((request, response) => {
  response.sendFile('404.html', {root: './public'});
});

app.listen(PORT, () => console.log('Listening on PORT', PORT));