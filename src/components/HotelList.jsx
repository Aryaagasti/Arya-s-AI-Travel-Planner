import React from 'react';
import { Table } from 'react-bootstrap';

function HotelList({ hotels }) {
  return (
    <div className="mb-5">
      <h2>Hotels</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Hotel</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Booking Link</th>
          </tr>
        </thead>
        <tbody>
          {hotels.map((hotel, index) => (
            <tr key={index}>
              <td>{hotel.title}</td>
              <td>{hotel.price}</td>
              <td>{hotel.rating}</td>
              <td><a href={hotel.link} target="_blank" rel="noopener noreferrer">Book Now</a></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default HotelList;