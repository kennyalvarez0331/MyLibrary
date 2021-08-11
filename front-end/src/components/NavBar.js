import React, { useState } from 'react';
import { Navbar, Container, Nav, Form, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function NavBar() {
  return (
    <>
      <Navbar sm='auto' bg='dark' variant='dark' sticky='top'>
        <Container>
          <Navbar.Brand href='/'>My Library</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='/'>Books</Nav.Link>
            <Nav.Link href='/books/new'>Add Book</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
