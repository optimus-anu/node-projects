const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

if(process.argv[2]) {
    geocode(process.argv[2], (error, data) => {
        if (error) {
            return console.log(error);
        } else {
            forecast(data.latitude, data.longitude, (error, response) => {
                if(error) {
                    return console.log(error);
                } else {
                    console.log(`${data.location}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out`);
                }
            }); 
        }
    });
} else {
    console.log('Please provide a location');
}



    