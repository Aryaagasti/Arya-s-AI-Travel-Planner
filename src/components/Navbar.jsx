import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function CustomNavbar() {
  return (
    <Navbar expand="lg" fixed="top" style={{ backgroundColor: '#1F2937' }}>
      <Container>
        <Navbar.Brand href="/" className="fw-bold text-white">
          Arya's AI Traveler
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="text-white mx-2" style={{ color: 'white', transition: '0.3s' }}>
              Home
            </Nav.Link>
            <Nav.Link href="/about" className="text-white mx-2" style={{ color: 'white', transition: '0.3s' }}>
              About
            </Nav.Link>
            <Nav.Link href="/contact" className="text-white mx-2" style={{ color: 'white', transition: '0.3s' }}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
