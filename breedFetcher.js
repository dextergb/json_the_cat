const request = require("request");

const fetchBreedDescription = function (breedName, callback) {
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(URL, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    const data = JSON.parse(body)[0];
    // const breed = body[0]
    if (data) {
      return callback(null, data.description);
    } else {
      return callback("No results found");
    }
  });
};

module.exports = { fetchBreedDescription };
