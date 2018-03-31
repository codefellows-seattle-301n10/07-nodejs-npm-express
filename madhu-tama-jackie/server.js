'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// REVIEW: POST route needs to parse the body passed in with the request. express.urlencoded() attaches "middleware" to do that
app.get('/articles', (req,res) => {
  res.sendFile('index.html',{root: './public'});
})
//define directory for serving files for all methods
app.use(express.static('public'));
app.get('/new.html', (req,res) => {
  res.sendFile('new.html',{root: './public'});
})
app.post('/articles', express.urlencoded(), function(request, response) {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.send('Record posted to server!!');
})
app.listen(PORT, () => console.log('listening to port', PORT));
