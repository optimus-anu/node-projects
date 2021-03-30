const path = require('path');
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.set('view engine','hbs');
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'weather app',
        name: 'Anurag Singh'
    });
});
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Andrew'
    });
});
app.get('/help', (req, res) => {
    res.render('help', {
        message: 'This is the section to get you help'
    });
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