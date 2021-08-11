import axios from 'axios';

const url = 'http://localhost:5000/api/books';

export const fetchBooks = () => axios.get(url);

export const fetchBook = (bookId) => axios.get(`${url}/${bookId}`);

export const createBook = (newBook) => axios.post(url, newBook);

export const updateBook = (book, bookId) =>
  axios.patch(`${url}/${bookId}`, book);

export const deleteBook = (bookId) => axios.delete(`${url}/${bookId}`);
