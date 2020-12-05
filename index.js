
const { fetchBreedDescription } = require('./breedFetcher');

// store the breedType from the user command line input
const breedName = process.argv[2];

// call fetchBreedDescription function as well the specify the callback function that will be called / provided to breedFetcher.js file.
fetchBreedDescription(breedName, (error, desc) => {

  if (error) {
    console.log('Error fetch details:', error);
  } else {

    console.log(desc);

  }
});

