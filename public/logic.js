//does not have a error message, if the array doest exist(not nesesary )
fetch("http://localhost:3000/api/dogs").then((response) => {
return response.json()
}).then((dogs) => {
    console.log(dogs)
    printAllDogs(dogs)
})

function printAllDogs(dogs) {
    let allDogsContainer = document.getElementById("allDogs")
dogs.forEach(dog => {
    
    let dogName = document.createElement("h4")
    dogName.innerText = dog.name
    let dogBorn = document.createElement("h4")
    dogBorn.innerText = dog.born
    let dogBreed = document.createElement("h4")
    dogBreed.innerText = dog.breed

    let dogDiv = document.createElement("div")
    dogDiv.appendChild(dogName)
    dogDiv.appendChild(dogBorn)
    dogDiv.appendChild(dogBreed)

    allDogsContainer.appendChild(dogDiv)

});
}