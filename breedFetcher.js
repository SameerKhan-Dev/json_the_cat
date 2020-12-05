
const request = require('request');




const fetchBreedDescription = function(breedName, callback) {
  // request data from destination, request will call the callback function that we are specifying below.
  let destination = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(destination, (error, response, body) => {

    if (error) {

      // call the callback function to print error if error occurred, description is null because error occurred.
      callback(error, null);

    } else if (body === "[]") {
      // if body is empty array means breed type not specified or not found.
      //console.log("Error: breed type not specified or not found!");
      const err = "breed type not specified or not found!";
      const desc = null;
      callback(err, desc);

    } else {
      // call the callback function because no error but send in the value of null representing success and the description to print.
      const data = JSON.parse(body);
      const description = data[0].description;
      callback(null, description);
    }

  });

};

module.exports = { fetchBreedDescription };


