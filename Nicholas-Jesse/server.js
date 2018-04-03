'use strict';

const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));

// REVIEW: POST route needs to parse the body passed in with the request. express.urlencoded() attaches "middleware" to do that
app.post('/articles', express.urlencoded({extended: true}), function(request, response) {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.send('Record posted to server!!');
})

app.listen(PORT, () => console.log('Listening on PORT' , PORT));

app.get('/index', (request , response) => {
  response.sendFile('index.html' , {root: './public'});
});

app.get('/new' , (request, response) => {
  response.sendFile('new.html', {root: './public'});
});

app.use((request, response) => {
  response.send(404);
});

