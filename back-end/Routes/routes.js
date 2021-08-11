import express from 'express';
const router = express.Router();

import {
  getBooks,
  createBook,
  getBook,
  updateBook,
  deleteBook,
} from '../controller/controller.js';

// gets all books
router.get('/', getBooks);
router.post('/', createBook);
router.get('/:Bookid', getBook);
router.patch('/:Bookid', updateBook);
router.delete('/:Bookid', deleteBook);

export default router;
