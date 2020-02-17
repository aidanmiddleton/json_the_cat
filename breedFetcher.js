const request = require('request');


const fetchBreedDescription = function(breedName, callback) {

  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    const data = JSON.parse(body);
    breed = data[0]
    if (!breed) {
      callback(error, null);
    } else {
      callback(error, breed.description);
    }
})

};

module.exports = { fetchBreedDescription };




