import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getBooks } from './actions/books';
import { useSelector } from 'react-redux';

import NavBar from './components/NavBar';
import Books from './components/Narbar/Books';
import NewBookForm from './components/NewBookForm';
import BookPage from './components/BookPage';

function App() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <>
      <NavBar />

      <Router>
        <Switch>
          <Route exact path='/'>
            <Books books={books} />
          </Route>
          <Route path='/books/new'>
            <NewBookForm isEdit={false} />
          </Route>
          <Route path='/books/edit/:bookid'>
            <NewBookForm isEdit={true} />
          </Route>
          <Route path='/:bookid'>
            <BookPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
