import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const WeatherCard = ({ city, weather }) => {
  const cardStyle = {
    backgroundColor: "#4B0082",
    boxShadow: "0 0 20px 0 rgba(255, 255, 255, 0.3)",
    color: "#00FF00",
    height: "300px",
    marginBottom: "30px",
  };

  const textStyle = {
    textShadow: "0 0 10px #00FF00",
  };

  if (!weather || !weather.main || !weather.weather) {
    return null;
  }

  const { description } = weather.weather[0];

  return (
    <Card style={cardStyle}>
      <CardContent>
        <Typography variant="h5" style={textStyle}>
          {city}
        </Typography>
        <Typography variant="body1" style={textStyle}>
          Температура: {weather.main.temp} °C
        </Typography>
        <Typography variant="body1" style={textStyle}>
          Погода: {description}
        </Typography>
        <Typography variant="body1" style={textStyle}>
          Ощущается как: {weather.main.feels_like} °C
        </Typography>
        <Typography variant="body1" style={textStyle}>
          Влажность: {weather.main.humidity}%
        </Typography>
        <Typography variant="body1" style={textStyle}>
          Давление: {weather.main.pressure} мм рт. ст.
        </Typography>
        <Typography variant="body1" style={textStyle}>
          Скорость ветра: {weather.wind.speed} м/с
        </Typography>
        <Typography variant="body1" style={textStyle}>
          Облачность: {weather.clouds.all}%
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
