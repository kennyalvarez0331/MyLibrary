import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publish_date: {
    type: String,
    required: true,
  },
  page_count: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  genres: {
    type: String,
    required: true,
  },
  file: {
    type: String,
    required: true,
  },
});

const Book = mongoose.model('Book', BookSchema);

export default Book;
