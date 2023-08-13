const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://moviesdatabase.p.rapidapi.com/titles/series/%7BseriesId%7D',
  headers: {
    'X-RapidAPI-Key': '392889298dmsh511336e86f36e73p10b0e4jsn9df32522b669',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}