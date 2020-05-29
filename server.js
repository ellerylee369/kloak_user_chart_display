const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/views')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.get('/', (req, res) => {
    res.render('index.pug', {
        title: 'Kloak User Chart',
        text: 'Hello World'
    });
});
app.listen(port, () => {
    console.log('Listening on port', port);
});
