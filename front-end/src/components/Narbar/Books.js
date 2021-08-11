import React from 'react';
import Book from './Book/Book';
import { Link } from 'react-router-dom';
import { Row, Container } from 'react-bootstrap';

function Books({ books }) {
  return (
    <>
      <Container fluid>
        <Row sm='auto'>
          {books.map((book) => {
            return (
              <Link to={`/${book._id}`}>
                <Book key={book._id} book={book} />
              </Link>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Books;
