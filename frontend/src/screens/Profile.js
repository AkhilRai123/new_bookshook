import React, { useEffect, useState } from "react";
import axios from "axios";

const MyBookings = () => {
    const [bookings, setBookings] = useState([]);
    const user = JSON.parse(localStorage.getItem("currentUser")); // Get user details

    useEffect(() => {
        if (user) {
          axios
            .post("/api/bookings/getuserbookings", { userid: user._id }) // POST request
            .then((res) => {
              console.log("Bookings fetched:", res.data); // Debugging log
              setBookings(res.data);
            })
            .catch((err) => {
              console.log("Error fetching bookings:", err);
            });
        }
      }, [user]);
      

    return (
        <div className="container">
            <h2 className="title">My Bookings</h2>
            <div className="user-details">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
            </div>

            {bookings.length > 0 ? (
                <div className="bookings-list">
                    {bookings.map((booking) => (
                        <div key={booking._id} className="booking-card">
                            <h4>{booking.room}</h4>
                            <p><strong>Check-in:</strong> {booking.fromdate}</p>
                            <p><strong>Check-out:</strong> {booking.todate}</p>
                            <p><strong>Total Amount:</strong> ₹{booking.totalamount}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="no-bookings">No bookings found.</p>
            )}
        </div>
    );
};

export default MyBookings;
