import { Link } from 'react-router-dom';
import React from "react";

const ReservationSuccess = ({
  date,
  hour,
  guests,
  occasion,
  email,
  onNewReservation,
}) => {
    const meses = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthindex = parseInt(date.split("-")[1])-1;

  return (
    <div style={styles.container}>
      <h2 style={styles.successTitle}>🎉 Reservation Confirmed!</h2>

      <p style={styles.thankYou}>
        Thank you for choosing <strong>Little Lemon</strong>.
      </p>

      <div style={styles.detailsBox}>
        <h3>Reservation Details</h3>
        <p><strong>Date:</strong> {meses[monthindex]} {date.split("-")[2]}, {date.split("-")[0]}</p>
        <p><strong>Hour:</strong> {hour}</p>
        <p><strong>Number of Guests:</strong> {guests}</p>
        <p><strong>Occasion:</strong> {occasion}</p>
        <p><strong>Email:</strong> {email}</p>
      </div>

      <p style={styles.infoMessage}>
        You will shortly receive an email with your confirmation number and
        full reservation details.
      </p>

      <div style={styles.buttonContainer}>
        <Link to="/" style={styles.primaryButton}>
          Go Back Home
        </Link>

        <button onClick={onNewReservation} >
          Make Another Reservation
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "500px",
    margin: "40px auto",
    padding: "30px",
    textAlign: "center",
    border: "1px solid #ddd",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
    fontFamily: "Arial, sans-serif",
  },
  successTitle: {
    color: "#eb6b3e",
    marginBottom: "10px",
  },
  thankYou: {
    marginBottom: "20px",
    fontSize: "16px",
  },
  detailsBox: {
    backgroundColor: "#f9f9f9",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "20px",
    textAlign: "left",
  },
  infoMessage: {
    fontSize: "14px",
    marginBottom: "25px",
    color: "#555",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  primaryButton: {
    padding: "10px 16px",
    borderRadius: "1rem",
    border: "1px solid black",
    backgroundColor: "#495e57",
    color: "white",
    cursor: "pointer",
  },
  secondaryButton: {
    padding: "10px 16px",
    borderRadius: "6px",
    border: "1px solid #495e57",
    backgroundColor: "white",
    color: "#495e57",
    cursor: "pointer",
  },
};

export default ReservationSuccess;
