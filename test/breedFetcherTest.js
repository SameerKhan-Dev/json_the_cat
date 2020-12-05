
// obtain access to the fetchBreedDescription function inside the file breedFetcher.js
const { fetchBreedDescription } = require('../breedFetcher');
// obtain access to the chai library and methods.
const { assert } = require('chai');

// use describe / it blocks to test functions
describe('fetchBreedDescription', () => {

  it('returns a string description for a valid breed, via callback', (done) => {

    fetchBreedDescription('Siberian', (err, desc) => {

      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      assert.equal(expectedDesc, desc.trim());

      done();

    });

  });
  
  it('returns a alert statement when an invalid/non existen breed is passed in, via callback', (done) => {

    fetchBreedDescription('Basketball', (err, desc) => {

      // we expect desc to equal null for this scenario
      assert.equal(desc, null);

      const expectedError = "breed type not specified or not found!";

      assert.equal(expectedError, err);

      done();

    });

  });
  

});