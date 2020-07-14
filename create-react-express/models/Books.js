const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksSchema = new Schema({
    title: { type: String, required: true },
    subtitle: { type: String },
    authors: { type: [String], required: true },
    link: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String }
});

const Book = mongoose.model("Book", booksSchema);

module.exports = Book;