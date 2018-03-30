var express = require('express'),
    bodyParser = require('body-parser'),
    routes = require('./api/routes');

var app = express();

// USE STATIC FOLDERS
app.use(express.static('public'));
app.use('/node_modules', express.static('node_modules'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// SERVES API REQUESTS
app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname,'public','index.html'));
});

app.use('/api/composition', routes);

module.exports = app;