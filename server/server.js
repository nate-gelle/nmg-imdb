const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

const movies = require('./routes/movies.router');
const genres = require('./routes/genres.router')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('server/public'));

app.use('/movies', movies);
app.use('/genres', genres);

app.listen(port, function(){
    console.log('listening on port', port);
});