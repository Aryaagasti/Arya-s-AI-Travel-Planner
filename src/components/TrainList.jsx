import React from 'react';
import { Table } from 'react-bootstrap';

function TrainList({ trains }) {
  return (
    <div className="mb-5">
      <h2>Trains</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Train</th>
            <th>Price</th>
            <th>Timings</th>
            <th>Booking Link</th>
          </tr>
        </thead>
        <tbody>
          {trains.map((train, index) => (
            <tr key={index}>
              <td>{train.title}</td>
              <td>{train.price}</td>
              <td>{train.timings}</td>
              <td><a href={train.link} target="_blank" rel="noopener noreferrer">Book Now</a></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TrainList;