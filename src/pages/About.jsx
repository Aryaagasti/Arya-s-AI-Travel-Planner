import React from 'react';
import { Container } from 'react-bootstrap';
import CustomNavbar from '../components/Navbar';
import CustomFooter from '../components/Footer';

function About() {
  return (
    <div>
      {/* Navbar */}
      <CustomNavbar />

      {/* About Content */}
      <Container className="my-5">
        <h1 className="text-center mb-4">About Arya's AI Traveler</h1>
        <p className="lead">
          Arya's AI Traveler is your ultimate travel companion, designed to help you plan your trips effortlessly.
          With AI-powered suggestions, we provide personalized travel plans tailored to your preferences and budget.
        </p>
      </Container>

      {/* Footer */}
      <CustomFooter />
    </div>
  );
}

export default About;