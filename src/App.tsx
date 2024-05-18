import { Container, Typography } from "@mui/material";
import React from "react";
import { Provider } from "react-redux";
import WeatherForm from "./components/weather-form/weather-form";

function App() {
  const searchWeatherByCity = (city) => {
    //fetch weather
  };

  return (
    <>
      <Container>
        <Typography variant="h2" gutterBottom>
          Weather App
        </Typography>
        <WeatherForm onSubmit={searchWeatherByCity} />
        {/* {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching weather data.</p>}
      {weathers && <WeatherList weathers={weathers} />} */}
      </Container>
    </>
  );
}

export default App;
