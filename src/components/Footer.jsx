import React from 'react';
import { Container } from 'react-bootstrap';

function CustomFooter() {
  return (
    <footer style={{ backgroundColor: '#1F2937', color: 'white', padding: '20px', marginTop: '20px' }}>
      <Container className="text-center">
        <p className="mb-0">&copy; 2025 Arya's AI Traveler. All rights reserved.</p>
        <p className="mb-0">Designed with ❤️ by Arya Agasti</p>
      </Container>
    </footer>
  );
}

export default CustomFooter;
