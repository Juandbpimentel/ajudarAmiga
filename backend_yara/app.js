var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//mongo connection
require('./db/mongo.connection');

var bookMongo = require('./routes/books.routes');

var app = express();

app.use(bodyParser.json({limit: '16mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '16mb', extended: true}));
app.use(cookieParser());

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	res.header(
		'Access-Control-Allow-Methods',
		'GET, POST, OPTIONS, PUT, DELETE, PATCH'
	);
	next();
});

app.use('/books', bookMongo);

module.exports = app;
