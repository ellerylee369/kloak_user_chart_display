const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
app.set('view engine', 'pug');
app.use(express.static(path.__dirname + '/public'));
app.use(express.static(path.__dirname + '/views'));
app.get('/', (req, res) => {
    res.render('index.pug', {
        title: 'Kloak User Chart',
        text: 'Hello World'
    });
});
app.listen(port, () => {
    console.log('Listening on port', port);
});
