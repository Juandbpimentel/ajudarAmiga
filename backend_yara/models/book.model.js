var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
	name: { type: String, required: true, max: 200 },
	description: { type: String, required: true, max: 1000 },
	price: { type: Number, required: true },
	genre: { type: String, required: true, max: 200 },
	image: {
		type: String,
		required: false,
	},
});

module.exports = Book = mongoose.model('Books', BookSchema);
