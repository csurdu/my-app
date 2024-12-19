import React, { useState, useEffect } from "react";
import axios from "axios";
import "./HotelPage.css"; // Adaugă stiluri personalizate

const HotelPage = ({ user }) => {
  const [hotelOffers, setHotelOffers] = useState([]);

  useEffect(() => {
    axios
      .get("/api/hotels")
      .then((response) => setHotelOffers(response.data))
      .catch((error) => console.error("Error fetching hotel offers:", error));
  }, []);

  if (user.role !== "Hotel Manager") {
    return <h2>Access Denied</h2>;
  }

  const handleDelete = (offerId) => {
    axios
      .delete(`/api/hotels/${offerId}`)
      .then(() => setHotelOffers((prev) => prev.filter((offer) => offer.id !== offerId)))
      .catch((error) => console.error("Error deleting offer:", error));
  };

  return (
    <div className="hotel-page">
      <h2>Welcome, {user.name}</h2>
      <p>You can manage hotel offers:</p>
      <table>
        <thead>
          <tr>
            <th>Offer Name</th>
            <th>Price</th>
            <th>Availability</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {hotelOffers.map((offer) => (
            <tr key={offer.id}>
              <td>{offer.name}</td>
              <td>{offer.price}</td>
              <td>{offer.availability}</td>
              <td>
                <button onClick={() => handleDelete(offer.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HotelPage;
