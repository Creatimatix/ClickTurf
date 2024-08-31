import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza1.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Click Turf </h1>
        <p> One click away to book turf.</p>
        <Link to="/book">
          <button> BOOK NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
