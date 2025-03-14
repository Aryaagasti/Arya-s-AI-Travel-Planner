import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import TravelPlan from '../components/TravelPlan';
import HotelList from '../components/HotelList';
import FlightList from '../components/FlightList';
import TrainList from '../components/TrainList';
import CustomNavbar from '../components/Navbar';
import CustomFooter from '../components/Footer';

function Results() {
  const location = useLocation();
  const { source, destination, startDate, endDate, budget, interests } = location.state;
  const [plan, setPlan] = useState(null);

  useEffect(() => {
    axios.post('https://travel-planner-ai-agent-1.onrender.com/api/generate-plan', {
      source,
      destination,
      startDate,
      endDate,
      budget,
      interests
    }).then(response => {
      setPlan(response.data);
    });
  }, [source, destination, startDate, endDate, budget, interests]);

  if (!plan) return <div>Loading...</div>;

  return (
    <div>
      {/* Navbar */}
      <CustomNavbar />

      {/* Travel Plan Content */}
      <div className="container mt-5">
        <h1 className="text-center mb-4">Your Travel Plan</h1>
        <TravelPlan plan={plan.travel_plan} />
        <HotelList hotels={plan.hotels} />
        <FlightList flights={plan.flights} />
        <TrainList trains={plan.trains} />
      </div>

      {/* Footer */}
      <CustomFooter />
    </div>
  );
}

export default Results;