import React from "react";
import "../Styles/body.css";
import CurrentWeather from "./CurrentWeather";

const Body = () => {
  return (
    <main className="body-container">
      <CurrentWeather />
    </main>
  );
};

export default Body;
