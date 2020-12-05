
const request = require('request');

// store the breedType from the user command line input
let breedType = process.argv[2];

let destination = `https://api.thecatapi.com/v1/breeds/search?q=${breedType}`;

request(destination, (error, response, body) => {
  
  if (error) {

    console.log('error', error);
    
  } else if (body === "[]") {
      
    console.log("Error: breed type not specified or not found!");
  } else {

    const data = JSON.parse(body);
    console.log(data[0].description);
  }
  /*
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  */
  
  //console.log(typeof body);
  //console.log(body);

  // deserialize the data that is in JSON format
    
  //console.log(data);
  //console.log(typeof data);

  // per instructions: Access the first entry in the data array and print out the description for the user
});