// youtube link for project tutorial: https://youtu.be/H9M02of22z4?si=ZkQmzmPgZVZQUV6I;

// setup: 
    // npm install express
    // npm i -D nodemon to watch

// basic express js server

const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDb(); 

const app = express(); 

const port = process.env.PORT || 5000; 

//middleware:
// the order here is very important -- must parse before it reads the routes! Must have the response before it handles the error
// helps parse data received from client in POST
app.use(express.json());
// add routes
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
