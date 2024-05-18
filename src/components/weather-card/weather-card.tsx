import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const WeatherCard = ({ city, weather }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{city}</Typography>
        <Typography variant="body1">{weather}</Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
