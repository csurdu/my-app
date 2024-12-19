import React from "react";

const HotelPage = ({ user }) => {
  // Hardcoded hotel data
  const hotelOffers = [
    { id: 1, name: "Deluxe Room", price: "$200", availability: "Available" },
    { id: 2, name: "Suite Room", price: "$400", availability: "Booked" },
  ];

  if (user.role !== "Hotel Manager") {
    return <h2>Access Denied</h2>;
  }

  return (
    <div>
      <h2>Welcome, {user.name}</h2>
      <p>You can manage hotel offers:</p>
      <table>
        <thead>
          <tr>
            <th>Offer Name</th>
            <th>Price</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          {hotelOffers.map((offer) => (
            <tr key={offer.id}>
              <td>{offer.name}</td>
              <td>{offer.price}</td>
              <td>{offer.availability}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HotelPage;
