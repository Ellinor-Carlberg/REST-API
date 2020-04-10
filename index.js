//object express, function require
const express = require('express');
//object app, function express
const app = express();

const dogs = [
 {
   id: 1,
   name: "Tuff",
   born: 2012, 
   breed: "Dachshund"
 },

 {
    id: 2,
    name: "Otto",
    born: 2015, 
    breed: "Weimaraner"
    
  },

  {
    id: 3,
    name: "Uno",
    born: 2017, 
    breed: "Italian greyhound"
  },

  {
    id: 4,
    name: "Inka",
    born: 2019, 
    breed: "Perro sin pelo del perú"
    
  }

]
//get method. Impliment endpoints that respond to http get request.
//this method takes 2 arguments, first the path/URL. 
//The second is a callbackfunction. 
//This function will be called when we have an http get-request to the URL endpoint '/'
//the callback have two arguments, request and response
//define route '/' and a route-handler(the callback function)
app.get('/', (req, res) => {
res.send('Hello world');
});

//get the list of objects and send it to the client
app.get('/api/dogs', (req, res) => {
res.send(dogs);
});

//get the objects that matches the id in URL to the value of id for the object. 
//store id in dog and send it to the client.
//api/dogs/1 will give you id 1
//if we dont find a dog with value id that matches
app.get('/api/dogs/:id', (req, res) => {
const dog = dogs.find( d => d.id === parseInt(req.params.id))
if (!dog) res.status(404).send('The dog with the given ID was not found.')
res.send(dog)
})


// PORT. assign the port, use the env. port, else 3000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
