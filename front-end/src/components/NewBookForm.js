import React, { useState, useEffect } from 'react';
import FileBase64 from 'react-file-base64';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createBook, updateBook, getBook } from '../actions/books';
import { useParams } from 'react-router';
import emptyBookObject from '../emptyBookObject';

function NewBookForm({ isEdit }) {
  const [book, setBook] = useState(emptyBookObject);
  const [validated, setValidated] = useState(false);
  const { bookid } = useParams();

  const dispatch = useDispatch();
  const oneBook = useSelector((state) => state.book);
  useEffect(() => {
    if (isEdit) {
      dispatch(getBook(bookid));
      setBook(oneBook);
    }
  }, [dispatch]);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
    if (isEdit) dispatch(updateBook(book, bookid));
    else dispatch(createBook(book));
  };

  return (
    <Container style={{ marginTop: '4rem' }}>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Col md={{ span: 4, offset: 2 }}>
            <Form.Label>Title</Form.Label>
            <Form.Control
              required
              name='title'
              maxLength='100'
              value={book.title}
              onChange={(e) => setBook({ ...book, title: e.target.value })}
            />
          </Col>
          <Col md={4}>
            <Form.Label>Author</Form.Label>
            <Form.Control
              required
              name='author'
              maxLength='100'
              value={book.author}
              onChange={(e) => setBook({ ...book, author: e.target.value })}
            />
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 3, offset: 2 }}>
            <Form.Label>Publish Date</Form.Label>
            <Form.Control
              required
              placeholder='mm/dd/yyyy'
              name='Date'
              value={book.publish_date}
              onChange={(e) =>
                setBook({ ...book, publish_date: e.target.value })
              }
            />
          </Col>
          <Col md={{ span: 2 }}>
            <Form.Label>Page Count</Form.Label>
            <Form.Control
              required
              value={book.page_count}
              onChange={(e) => setBook({ ...book, page_count: e.target.value })}
            />
          </Col>
          <Col xs={2}>
            <Form.Group controlId='formFile' className='mb-3'>
              <Form.Label>Book Cover</Form.Label>
              <FileBase64
                type='file'
                multiple={false}
                onDone={({ base64 }) => setBook({ ...book, file: base64 })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 5, offset: 2 }}>
            <Form.Label>Description</Form.Label>
            <Form.Control
              required
              as='textarea'
              maxLength='500'
              rows={5}
              style={{ marginBottom: '2rem', resize: 'none' }}
              value={book.description}
              onChange={(e) =>
                setBook({ ...book, description: e.target.value })
              }
            />
          </Col>
          <Col md={3}>
            <Form.Label>Genre(s)</Form.Label>
            <Form.Control
              required
              value={book.genres}
              onChange={(e) => setBook({ ...book, genres: e.target.value })}
            />
          </Col>
        </Row>
        <Row>
          <Col md={{ offset: 2 }}>
            <Button variant='secondary' type='submit'>
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default NewBookForm;
