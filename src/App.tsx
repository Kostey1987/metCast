import React, { useState } from "react";
import { Box, Container, CssBaseline, Grid, Typography } from "@mui/material";
import WeatherForm from "./components/weather-form/weather-form";
import WeatherList from "./components/weather-list/wether-list";
import { useGetWeatherByCityQuery } from "./services/api";
import NeonBorder from "./components/neon-border/neon-border";

function App() {
  const [city, setCity] = useState("Moscow");

  const { data: weathers, isLoading, isError } = useGetWeatherByCityQuery(city);

  const searchWeatherByCity = (city) => {
    setCity(city);
  };

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          backgroundColor: "#283593",
          color: "#ffffff",
          borderRadius: "20px",
          boxShadow: "0 0 20px 5px rgba(0, 0, 100, 0.5)",
          position: "relative",
        }}
      >
        <NeonBorder />
        <Container>
          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontFamily: '"Jersey 15", sans-serif',
              color: "#ff0000",
              textShadow: "0 0 10px #ff0000",
            }}
          >
            MetCast
          </Typography>

          <WeatherForm onSubmit={searchWeatherByCity} />

          <Grid item xs={12} style={{ marginTop: "20px" }}>
            {isLoading && <Typography>Загрузка...</Typography>}
            {isError && (
              <Typography>Ошибка получения данных о погоде</Typography>
            )}
            {weathers && <WeatherList weather={weathers} />}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default App;
