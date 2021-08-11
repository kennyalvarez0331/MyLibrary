import {
  FETCH_ALL,
  FETCH_ONE,
  CREATE,
  UPDATE,
  DELETE,
} from '../constants/actionTypes';
import * as api from '../api';

export const getBooks = () => async (dispatch) => {
  try {
    const { data } = await api.fetchBooks();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getBook = (bookid) => async (dispatch) => {
  try {
    const { data } = await api.fetchBook(bookid);
    dispatch({ type: FETCH_ONE, payload: data[0] });
  } catch (error) {
    console.log(error);
  }
};

export const createBook = (book) => async (dispatch) => {
  try {
    const { data } = await api.createBook(book);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateBook = (book, bookid) => async (dispatch) => {
  try {
    const { data } = await api.updateBook(book, bookid);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteBook = (bookid) => async (dispatch) => {
  try {
    await api.deleteBook(bookid);

    dispatch({ type: DELETE, payload: bookid });
  } catch (error) {
    console.log(error);
  }
};
