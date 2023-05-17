import React from 'react'
import Link from 'next/link'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBarComponent() {
  return (
    <>
     <Navbar bg="dark" variant="dark">
    <Container>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/movie">Movies</Nav.Link>
        <Nav.Link href="/product">Product</Nav.Link>
      </Nav>
    </Container>
  </Navbar>

    </>
  )
}
