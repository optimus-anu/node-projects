const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

if(process.argv[2]) {
    geocode(process.argv[2], (error, {latitude, longitude, location} = {}) => {
        if (error) {
            return console.log(error);
        } else {
            forecast(latitude, longitude, (error, {body} = {}) => {
                if(error) {
                    return console.log(error);
                } else {
                    console.log(`${location}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out`);
                }
            }); 
        }
    });
} else {
    console.log('Please provide a location');
}



    