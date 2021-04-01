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
        title: 'Weather app',
        name: 'Anurag Singh'
    });
});
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Anurag Singh'
    });
});
app.get('/help', (req, res) => {
    res.render('help', {
        message: 'This is the section to get you help',
        title: 'This is Help Page',
        name: 'Anurag Singh'
    });
});

app.get('/weather', (req, res) => {
    if(!req.query.address) {
        return res.send({
            error: 'Address must be provided',
        });
    }
    res.send({
        place: "Mathura",
        address: req.query.address,
        weather: "Clear Sunny",
    });
});

app.get('/products', (req, res) => {
    if(!req.query.search) {
        return res.send({
            error: 'You must provide a search term',
        });
    }

    console.log(req.query.search);
    res.send({
        products: [],
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