'use strict';

const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('public'));

app.get('/new.html', (request, response) => {
  response.sendFile('new.html', {root: './public'});
})
// REVIEW: POST route needs to parse the body passed in with the request. express.urlencoded() attaches "middleware" to do that
app.post('/articles', express.urlencoded(), function(request, response) {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.send('Record posted to server!!');
})

app.use((request, response) =>{
  response.sendStatus(404);
})

app.listen(PORT, () => console.log('Listening on Port', PORT));
