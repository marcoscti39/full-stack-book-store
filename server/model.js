const mongoose = require("mongoose");

const { Schema } = mongoose;

const BookSchema = Schema({
  name: String,
  imageURL: String,
  text: String,
  price: String,
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
