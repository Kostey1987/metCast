import React from "react";
import WeatherCard from "../weather-card/weather-card";

const WeatherList = ({ weather }) => {
  if (!weather) {
    return null;
  }
  return (
    <div>
      <WeatherCard city={weather.name} weather={weather} />
    </div>
  );
};

export default WeatherList;
