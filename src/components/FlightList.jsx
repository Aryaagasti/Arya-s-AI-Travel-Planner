import React from 'react';
import { Table } from 'react-bootstrap';

function FlightList({ flights }) {
  return (
    <div className="mb-5">
      <h2>Flights</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Flight</th>
            <th>Price</th>
            <th>Timings</th>
            <th>Booking Link</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight, index) => (
            <tr key={index}>
              <td>{flight.title}</td>
              <td>{flight.price}</td>
              <td>{flight.timings}</td>
              <td><a href={flight.link} target="_blank" rel="noopener noreferrer">Book Now</a></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default FlightList;