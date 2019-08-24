// Web Server with Express.

var express = require('express');

var app = express(); // Declarate Express Object

// API Routes

var peopleRouter = require('./routes/people.js'); // People Route

// API Entry
app.use("/api/people", peopleRouter); // localhost:3000/api/people It has the people API

app.use("/", function(req, res){
    console.log("Testing Server"); // Log Message.
    res.send("<h1> This is the Server </h1>"); // Send HTML
});

app.listen(3000);