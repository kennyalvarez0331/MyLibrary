import React, { useRef, useState } from 'react';
import { Card, Col, Overlay } from 'react-bootstrap';
function Book({ book }) {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <Col>
      <Card
        style={{
          width: '15rem',
          height: '25rem',
          marginBottom: '1rem',
          marginTop: '1rem',
        }}>
        <Card.Img
          ref={target}
          src={book.file}
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          style={{ width: '15rem', height: '25rem' }}
        />
        <Overlay target={target.current} show={show} placement='auto'>
          {({ arrowProps, show: _show, popper, ...props }) => (
            <Card.Body
              onMouseOver={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
              {...props}
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                color: 'white',
                cursor: 'pointer',
                width: '15rem',
                borderRadius: 3,
                ...props.style,
              }}>
              <Card.Title style={{ width: '14rem', fontSize: '0.95rem' }}>
                {book.title}
              </Card.Title>
            </Card.Body>
          )}
        </Overlay>
      </Card>
    </Col>
  );
}

export default Book;
