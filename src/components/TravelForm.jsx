import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

function TravelForm({ onSubmit }) {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [budget, setBudget] = useState('');
  const [interests, setInterests] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ source, destination, startDate, endDate, budget, interests });
  };

  return (
    <Form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="source">
            <Form.Label>Source City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter source city"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              required
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="destination">
            <Form.Label>Destination City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter destination city"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="startDate">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="endDate">
            <Form.Label>End Date</Form.Label>
            <Form.Control
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="budget">
            <Form.Label>Budget</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter your budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              required
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="interests">
            <Form.Label>Interests</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="e.g., adventure, nature, history"
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Button variant="primary" type="submit" className="w-100">
        Generate Travel Plan
      </Button>
    </Form>
  );
}

export default TravelForm;