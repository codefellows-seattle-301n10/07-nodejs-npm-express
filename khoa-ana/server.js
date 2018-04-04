'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


//COMMENTED: our files are in a public directory because we want to direct users to only have access to the public files, rather than the entire project. Express JS serves our local files..
app.use(express.static('./public'));

// REVIEWED: POST route needs to parse the body passed in with the request. express.urlencoded() attaches "middleware" to do that
app.post('/articles', express.urlencoded(), (request, response) => {
  
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.send('Record posted to server!!');
});

app.get('/new-article', (req, res) => {
  res.sendFile('new.html', {root: './public'});
});

app.use((req, res) => {
  res.sendFile('404.html', {root: './public'});
  // OR  res.sendStatus(404)
  // OR  response.status(404).send('YOU BROKE IT');
});


app.listen(PORT, () => console.log('Port is', PORT));
