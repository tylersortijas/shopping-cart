import React from "react";
import video from "../Lamborghini-cut.mp4";

function HomePage() {
  return (
    <div className="homepage-container">
      <video autoPlay loop muted id="homeVideo">
        <source src={video} type="video/mp4" />
      </video>
      <div className="title-text">
        <h2>REVUELTO</h2>
        <h1>FROM NOW ON</h1>
      </div>
    </div>
  );
}

export default HomePage;
