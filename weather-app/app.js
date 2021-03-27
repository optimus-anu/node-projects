const request = require('request');
const url = 'http://api.weatherstack.com/current?access_key=62f0016857177d8b0387e798b22ae563&query=37.8267,-122.4233&units=f';
request({url: url, json: true}, (error, response) => {
    console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out`);
});

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoib3B0aW11cy1hbnUiLCJhIjoiY2ttcnA5ajhuMDlsNDJxczlxcXExb21qMiJ9.3TOmgbGFgu-9hDk4Nih2WA';
request({url: geocodeURL, json: true}, (error, response) => {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    console.log(`Latitude: ${latitude} Longitude: ${longitude}`);
});