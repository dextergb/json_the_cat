const request = require("request");
const args = process.argv.slice(2);
const breed = args[0];
const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(URL, (error, response, body) => {
  const data = JSON.parse(body);

  if (data.length === 0) {
    console.log("No results found");
    return;
  }
  if (error) {
    console.log("API error: ", error.message);
    return;
  }
  console.log(data[0].description);
});
