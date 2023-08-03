import React, { useState, useEffect } from 'react';
import './App.css'; 
type attributes = {
  name: string;
  primary_image_url: string;
}

interface Rental {
  id: string;
  attributes: attributes;
}

function App(): JSX.Element {
  const [rentals, setRentals] = useState<Rental[]>([]);
  const [searchRental, setSearchRental] = useState<string>('');


  useEffect(() => {
    const fetchRentals = async () => {
      try {
        let getRentalsUrl = 'https://search.outdoorsy.com/rentals?page[limit]=8&page[offset]=8';
        if (searchRental) {
          getRentalsUrl += `&filter[keywords]=${searchRental}`;
        }

        const response = await fetch(getRentalsUrl)
        const jsonData = await response.json();
        console.log(jsonData.data)
        setRentals(jsonData.data);
      } catch (error) {
        console.error('Error fetching rentals:', error);
      }
    };

    fetchRentals();
  }, [searchRental]);

  return (
    <div className="center-content">
      <h1>Trailer Rentals</h1>
      <input
        className="search-bar"
        type="text"
        placeholder="Search rentals"
        value={searchRental}
        onChange={(e) => setSearchRental(e.target.value)}
      />
      <ul className="rental-list">
        {rentals.map(rental => (
          <li key={rental.id} className="rental-item">
            <img className="rental-image"
              src={rental.attributes.primary_image_url}
              alt={rental.attributes.name}
            />
            <div className="rental-details">
              {<p>{rental.attributes.name}</p>}

            </div>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;




