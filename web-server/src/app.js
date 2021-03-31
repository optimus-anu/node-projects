const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

//Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials')

//setup handlebasr engines and views location
app.set('view engine','hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//setup static direcory to serve
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
        message: 'This is the section to get you help',
        title: 'This help page',
        name: 'Anurag Singh'
    });
});

app.get('/weather', (req, res) => {
    res.send({
        place: "Mathura",
        weather: "Clear Sunny",
    });
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Anurag Singh',
        errorMessage: 'Help article not found'
    });
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Anurag Singh',
        errorMessage: 'Page not found'
    });
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
});