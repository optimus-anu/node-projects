const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('Mathura', (error, data) => {
    if(data) {
        forecast(data.latitude, data.longitude, (error, response) => {
            if(error) {
                console.log(error);
            } else {
                console.log(`${response.body.location.name}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out`);
            }
        });  
    } else {
        console.log(error);
    } 
});


    