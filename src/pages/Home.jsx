import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap'; // ✅ Import Container from react-bootstrap
import TravelForm from '../components/TravelForm';
import CustomNavbar from '../components/Navbar';
import CustomFooter from '../components/Footer';

function Home() {
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    navigate('/results', { state: data });
  };

  return (
    <div>
      {/* Navbar */}
      <CustomNavbar />

      {/* Hero Section */}
      <div className="hero-section bg-light py-5">
        <Container className="text-center"> {/* Fixed Container import */}
          <h1 className="display-4 fw-bold mb-4">Plan Your Perfect Trip</h1>
          <p className="lead mb-4">
            Create customized travel plans with AI-powered suggestions. Explore the world with Arya's AI Traveler!
          </p>
          <TravelForm onSubmit={handleSubmit} />
        </Container>
      </div>

      {/* Footer */}
      <CustomFooter />
    </div>
  );
}

export default Home;
