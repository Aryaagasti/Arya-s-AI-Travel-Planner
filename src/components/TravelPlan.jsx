import React from 'react';
import { Card, ListGroup, Badge } from 'react-bootstrap';

function TravelPlan({ plan }) {
  // Clean up the plan text
  const cleanPlan = plan
    .replace(/\*\*/g, '') // Remove bold symbols
    .replace(/#/g, '') // Remove headings
    .replace(/\*/g, '') // Remove bullet points
    .split('\n') // Split into lines
    .filter(line => line.trim() !== ''); // Remove empty lines

  // Group lines into sections
  const sections = [];
  let currentSection = { title: '', content: [] };

  cleanPlan.forEach(line => {
    if (line.endsWith(':')) {
      // Start a new section
      if (currentSection.title) {
        sections.push(currentSection);
      }
      currentSection = { title: line.replace(':', ''), content: [] };
    } else {
      // Add line to current section
      currentSection.content.push(line);
    }
  });

  // Add the last section
  if (currentSection.title) {
    sections.push(currentSection);
  }

  return (
    <Card className="mb-5">
      <Card.Body>
        <Card.Title className="text-center mb-4">Travel Plan</Card.Title>
        {sections.map((section, index) => (
          <div key={index} className="mb-4">
            <h4>
              <Badge bg="primary">{section.title}</Badge>
            </h4>
            <ListGroup variant="flush">
              {section.content.map((line, i) => (
                <ListGroup.Item key={i}>{line.trim()}</ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        ))}
      </Card.Body>
    </Card>
  );
}

export default TravelPlan;