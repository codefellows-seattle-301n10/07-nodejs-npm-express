'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// REVIEWED: POST route needs to parse the body passed in with the request. express.urlencoded() attaches "middleware" to do that
app.get('/articles', (req,res) => {
  res.sendFile('index.html',{root: './public'});
})
//define directory for serving files for all methods
app.use(express.static('public'));
//Create a get request to handle new html web page
app.get('/new-article', (req,res) => {
  res.sendFile('new.html',{root: './public'});
})
//Posting the article to middleware
app.post('/articles', express.urlencoded(), (request, response) => {
  // REVIEWED: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.send('Record posted to server!!');
})

//404
app.use((request, response) => {
  response.sendFile('404.html', {root: './public'});
});

//Listen to port 3000
app.listen(PORT, () => console.log('listening to port', PORT));
