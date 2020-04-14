//GET, POST, PUT and DELETE methods take 2 arguments. First the path/URL.
//The second is a callbackfunction that will be called when we have an http-request to the URL endpoint.
//The callback have two arguments, request and response.


//Load the express modual. Return function with name express.
const express = require("express");

//Object app, call the function express.
const app = express();

//PORT. assign the port for the app.
//Use the environment variable PORT, else port 3000.
//console.log too se which port are in use.
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));

//Adding middleware, parser for body. parse json to text and vise versa.
app.use(express.json());

//Adding middleware, to serve file from whitin a given root direction
//in this case, folder with name public
app.use(express.static('public'));


//The resource, a array of objects.
const dogs = [
  {
    id: 1,
    name: "Tuff",
    born: 2012,
    breed: "Dachshund",
  },

  {
    id: 2,
    name: "Otto",
    born: 2015,
    breed: "Weimaraner",
  },

  {
    id: 3,
    name: "Uno",
    born: 2017,
    breed: "Italian greyhound",
  },

  {
    id: 4,
    name: "Inka",
    born: 2019,
    breed: "Perro sin pelo del perú",
  },
];

//GET METHOD.
//Get the list of dog objects and send it to the client.
app.get("/api/dogs", (req, res) => {
  res.send(dogs);
});

//GET METHOD, Route.
  //find the dog object with the id that matches the id in URL.
//store the dog object with the matching id and send it to the client.
app.get("/api/dogs/:id", (req, res) => {
  const dog = dogs.find((d) => d.id === parseInt(req.params.id));
  //If there is no id match, return 404 to the client.
  if (!dog) return res.status(404).send("The dog with the given ID was not found.");
  res.send(dog);
});

//POST METHOD.
//Create a new dog object to our array in server
app.post("/api/dogs", (req, res) => {

//validation, if name, born or breed exist or not
  if (!req.body.name || !req.body.born || !req.body.breed) 
    //send this error message to the client
   return res.status(400).send('Name, year of birth and breed is required.');
   

  //define how the object will look like
  const dog = {
    id: dogs.length + 1,
    name: req.body.name,
    born: req.body.born,
    breed: req.body.breed,
  };
  //push the object to the array
  dogs.push(dog);
  //send the object to the client
  res.send(dog);
});

//PUT METHOD.
//For updating a dog object.
app.put("/api/dogs/:id", (req, res) => {
  //find the dog object with the id that matches the id in URL.
  //if the dog object doesnt exist, return 404
  const dog = dogs.find((d) => d.id === parseInt(req.params.id));
  if (!dog) return res.status(404).send("The dog with the given ID was not found.");

  //validation, if name, born or breed exist or not
  if (!req.body.name || !req.body.born || !req.body.breed) 
    //send this error message to the client
   return res.status(400).send('Name, year of birth and breed is required.');
 

  //update the dog object
  dog.name = req.body.name;
  dog.born = req.body.born;
  dog.breed = req.body.breed;

  //return the updated dog object to the client
  res.send(dog);
});

//DELETE METHOD. 
//For deleting a dog object.
app.delete("/api/dogs/:id", (req, res) => {
//find the dog object with the id that matches the id in URL.
  //if the dog object doesnt exist, return 404
  const dog = dogs.find((d) => d.id === parseInt(req.params.id));
  if (!dog) return res.status(404).send("The dog with the given ID was not found.");

  //find the index of the dog object we want to delete in our dog array.
  const index = dogs.indexOf(dog)
  //delete the object
  dogs.splice(index, 1)

   //return the updated dog object to the client
   res.send(dog)

})


