const BookModel = require('../models/book.model');

module.exports = class BookService {
	static list(req, res) {
		BookModel.find().then((books) => {
			res.status(200).json(books);
		});
	}

	static retrieve(req, res) {
		BookModel.findById(req.params.id).then((book) => {
			res.status(200).json(book);
		});
	}

	static create(req, res) {
		BookModel.create(req.body).then((book) => {
			res.status(201).json(book);
		});
	}

	static update(req, res) {
		BookModel.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		}).then((book) => {
			res.status(200).json(book);
		});
	}

	static delete(req, res) {
		BookModel.findByIdAndRemove(req.params.id).then((book) => {
			res.status(200).json(book);
		});
	}
};