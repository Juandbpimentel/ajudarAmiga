var express = require('express');
const BookService = require('../services/books.service');
var router = express.Router();

router.get('/list', (req, res, next) => {
	BookService.list(req, res);
});

router.get('/retrieve/:id', (req, res, next) => {
	BookService.retrieve(req, res);
});

router.post('/create', (req, res, next) => {
	BookService.create(req, res);
});

router.patch('/update/:id', (req, res, next) => {
	BookService.update(req, res);
});

router.delete('/delete/:id', (req, res, next) => {
	BookService.delete(req, res);
});

module.exports = router;
