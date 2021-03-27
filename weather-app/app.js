const request = require('request');
const url = 'http://api.weatherstack.com/current?access_key=62f0016857177d8b0387e798b22ae563&query=37.8267,-122.4233';
request({url: url}, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data.current);
});