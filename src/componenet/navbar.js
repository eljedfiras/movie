import React from 'react';
import {Navbar, Nav } from 'react-bootstrap';

export default function Navbaar() {
  return (
      <Navbar bg="dark" variant="dark">
        
          <Navbar.Brand href="#home">Cima</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Movie</Nav.Link>
            <Nav.Link href="#features">Series</Nav.Link>
            <Nav.Link href="#pricing">Anime</Nav.Link>
          </Nav>
      </Navbar>
  )
}
