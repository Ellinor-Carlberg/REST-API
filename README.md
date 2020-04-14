# REST-API
A simple REST-API with Node.JS and Express

# Description of the project
The REST-API has CRUD functionality, it has five endpoints and the request methods: GET, POST, PUT and DELETE. 
The resource I have been working with is a array of objects stored locally in the server file. 
There are four objects and each object have the data: id, name, born and breed to describes different dogs. 

I have used the Visual studio Code extension REST client for testing my API. 

# How the project is built and run
1. First I install Node.JS
https://nodejs.org/en/download/

2. I created a folder for my project with a index.js file

3. I created a package.json file
by running:
npm init -y 
in the terminal

4. I install Express by running:
npm install express 
in the terminal

5. I install nodemon by running:
sudo npm i -g nodemon
in the terminal

6. Running my app with nodemon by writing:
nodemon index.js
in the terminal

7. I install the extension REST client in Visual Studio Code and make a file with name index.rest for testing my API.

(If I want to define the port for my app i can write do it in the terminal export PORT={the port I choose}. For example, if I want the port to be 4000 i write:
export PORT=4000
in the terminal.)


# Link to the GitHub repo
https://github.com/Ellinor-Carlberg/REST-API