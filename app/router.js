const express = require('express');
const router = express.Router();

// my modules
const htmlServices = require('./my_modules/cityHtml');

// homepage
router.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

// css
router.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '/css/style.css');
});

router.get('/city/style.css', (req, res) => {
    res.sendFile(__dirname + '/css/style.css');
});

// TODO other pages
router.get('/city/:capital', (req, res) => {
    const capital = req.params.capital;
    console.log(capital);
    res.send(htmlServices.buildHtmlTotal(capital));
});

module.exports = router;