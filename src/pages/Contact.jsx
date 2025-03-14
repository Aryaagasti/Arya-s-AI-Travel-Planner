import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import CustomNavbar from '../components/Navbar';
import CustomFooter from '../components/Footer';

function Contact() {
  return (
    <div>
      {/* Navbar */}
      <CustomNavbar />

      {/* Contact Content */}
      <Container className="my-5">
        <h1 className="text-center mb-4">Contact Us</h1>
        <Form>
          <Form.Group className="mb-3" controlId="name">
            <Form.Control type="text" placeholder="Your Name" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Control type="email" placeholder="Your Email" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="message">
            <Form.Control as="textarea" rows={5} placeholder="Your Message" required />
          </Form.Group>
          <Button variant="primary" type="submit">
            Send Message
          </Button>
        </Form>
      </Container>

      {/* Footer */}
      <CustomFooter />
    </div>
  );
}

export default Contact;