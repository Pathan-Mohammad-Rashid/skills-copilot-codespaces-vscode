// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Create a new array to store comments
let comments = [];

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create a new comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.status(201).json(comment);
});

// Start web server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});