const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=62f0016857177d8b0387e798b22ae563&query=${latitude},${longitude}&units=f`;
    request({url: url, json: true}, (error, response) => {
        if(error) {
            callback('unable to connect to weather service!', undefined);
        } else if(response.body.error) {
            callback('unable to get the weather. Try another location!', undefined);
        } else {
            callback(undefined, response);
        }
    });
}

module.exports = forecast;