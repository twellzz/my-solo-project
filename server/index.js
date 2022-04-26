const express = require("express"); // require the express server
const app = express(); // instantiate the server
const port = 1234; // define the port number
const router = require("./router/index.js"); // import the router file from the router folder

app.use(express.json()); // turn on the body parser which allows us to receive json messages

app.use(router); // turn on the router

app.listen(port); // turn on the server at the defined port number
