import mongoose from 'mongoose';
import Book from '../models/book.js';

export const getBooks = async (req, res) => {
  try {
    const Books = await Book.find();
    console.log(req.method, req.url);
    res.status(200).json(Books);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getBook = async (req, res) => {
  try {
    const { Bookid } = req.params;
    const oneBook = await Book.find({ _id: Bookid });
    console.log(req.method, req.url);
    res.status(200).json(oneBook);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createBook = async (req, res) => {
  const book = req.body;

  const newBook = new Book(book);
  try {
    await newBook.save();
    console.log(req.method, req.url);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateBook = async (req, res) => {
  const { Bookid: _id } = req.params;
  const book = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send('no book with that id');
  console.log(req.method, req.url);
  const updatedBook = await Book.findByIdAndUpdate(
    _id,
    { ...book, _id },
    { new: true }
  );

  res.json(updatedBook);
};

export const deleteBook = async (req, res) => {
  const { Bookid } = req.params;

  if (!mongoose.Types.ObjectId.isValid(Bookid))
    return res.status(404).send('no book with that id');

  console.log(req.method, req.url);
  await Book.findByIdAndRemove(Bookid);

  res.json({ message: 'Book removed' });
};
