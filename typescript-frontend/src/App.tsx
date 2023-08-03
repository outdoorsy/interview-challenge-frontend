import React, { useState, useEffect } from 'react';

type attributes = {
  name: string;
  description: string;
  vehicle_make: string;
  vehicle_model: string;
  vehicle_title: string;
  primary_image_url: string;
}

interface Rental {
  id: string;
  attributes: attributes;
}

function App(): JSX.Element {
  const [rentals, setRentals] = useState<Rental[]>([]);

  useEffect(() => {
    const fetchRentals = async () => {
      try {
        const response = await fetch('https://search.outdoorsy.com/rentals?filter[keywords]=trailer&page[limit]=8&page[offset]=8');
        const jsonData = await response.json();
        console.log(jsonData.data)
        setRentals(jsonData.data);
      } catch (error) {
        console.error('Error fetching rentals:', error);
      }
    };

    fetchRentals();
  }, []);

  return (
    <div>
      <h1>Trailer Rentals</h1>
      <ul>
        {rentals.map(rental => (
          <li key={rental.id}>
            <p>{rental.attributes.name}</p>
            <p>{rental.attributes.primary_image_url}</p>
            <p>{rental.attributes.vehicle_make}</p>
            <p>{rental.attributes.vehicle_model}</p>
            <p>{rental.attributes.vehicle_title}</p>
            <img src={rental.attributes.primary_image_url} alt={rental.attributes.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;




