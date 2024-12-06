import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-container">
      <h1>Welcome to Product Management Portal</h1>
      <Link to="/admin">
        <button className="navigate-button">Go to Admin Portal</button>
      </Link>
    </div>
  );
}

export default HomePage;
