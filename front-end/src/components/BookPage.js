import React, { useEffect } from 'react';
import { Button, ButtonGroup, Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getBook, deleteBook } from '../actions/books';
import Books from './Narbar/Books';

function BookPage() {
  const dispatch = useDispatch();
  const { bookid } = useParams();
  const singlebook = useSelector((state) => state.book);
  const books = useSelector((state) => state.books);

  const authorbooks = books.filter((book) => book.author === singlebook.author);
  useEffect(() => {
    dispatch(getBook(bookid));
  }, [dispatch, bookid]);

  return (
    <>
      <Container style={{ marginTop: '2rem' }}>
        <Row sm='auto' lg={3}>
          <Col md={{ offset: 1 }}>
            <img
              style={{ marginBottom: '1rem', width: '19rem', height: '29rem' }}
              src={singlebook.file}
              alt={singlebook.title}></img>
            <footer>
              <Link to={`/books/edit/${bookid}`}>
                <Button
                  style={{ borderRadius: '0px', marginRight: '1rem' }}
                  variant='dark'>
                  Edit
                </Button>
              </Link>
              <Link to='/'>
                <Button
                  style={{ borderRadius: '0px' }}
                  onClick={() => dispatch(deleteBook(bookid))}
                  variant='dark'>
                  Delete
                </Button>
              </Link>
            </footer>
          </Col>
          <Col>
            <h5>
              <strong>Title: </strong>
              {singlebook.title}
            </h5>
            <h5>
              <strong>Author: </strong>
              {singlebook.author}
            </h5>
            <h5>
              <strong>Description: </strong>
              {singlebook.description}
            </h5>
            <h5>
              <strong>Genre(s): </strong>
              {singlebook.genres}
            </h5>
            <h5>
              <strong>Page Count: </strong>
              {singlebook.page_count}
            </h5>
            <h5>
              <strong>Published: </strong>
              {singlebook.publish_date}
            </h5>
          </Col>
        </Row>
      </Container>
      <h2>Also from this author</h2>
      <Books books={authorbooks} />
    </>
  );
}

export default BookPage;
