//object express, function require
const express = require('express');
//object app, function express
const app = express();

//get method. Impliment endpoints that respond to http get request.
//this method takes 2 arguments, first the path/URL. 
//The second is a callbackfunction. 
//This function will be called when we have an http get-request to the URL endpoint '/'
//the callback have two arguments, request and response
//define route '/' and a route-handler(the callback function)
app.get('/', (req, res) => {
res.send('Hello world');
});

//get the list of objects
app.get('/api/courses', (req, res) => {
res.send([1, 2, 3]);
});


// PORT. assign the port, use the env. port, else 3000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
