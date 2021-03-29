const express = require('express');

const app = express();

app.get('', (req, res) => {
    res.send('<h1>Weather</h1>');
});

app.get('/help', (req, res) => {
    res.send([{
        name: 'Anurag',
        age: 22
    },
    {
        name: "Abhishek",
        age: 23,
    }
]);
});

app.get('/about', (req, res) => {
    res.send('<h2>This is about page</h2>');
});

app.get('/weather', (req, res) => {
    res.send({
        place: "Mathura",
        weather: "Clear Sunny",
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
});