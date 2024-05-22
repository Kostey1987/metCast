import React, { useState } from "react";
import {
  Box,
  CircularProgress,
  Container,
  CssBaseline,
  Grid,
  Typography,
} from "@mui/material";
import WeatherForm from "./components/weather-form/weather-form";
import WeatherList from "./components/weather-list/weather-list";
import { useGetWeatherByCityQuery } from "./services/api";
import NeonBorder from "./components/neon-border/neon-border";
import MusicPlayer from "./components/music-player/music-player";

const App = () => {
  const [city, setCity] = useState("Sochi");
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
          padding: 3,
          "@media (max-width: 600px)": {
            width: "90%",
            margin: "0 auto",
          },
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
          <Typography
            sx={{
              color: "#39ff14",
              textAlign: "left",
              marginLeft: "12px",
            }}
          >
            Чтобы узнать погоду:
          </Typography>

          <WeatherForm onSubmit={searchWeatherByCity} />

          <Grid item xs={12} style={{ marginTop: "20px" }}>
            {isLoading && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <CircularProgress color="primary" />
                <Typography
                  variant="h6"
                  mt={2}
                  style={{
                    fontFamily: '"Jersey 15", sans-serif',
                  }}
                >
                  Loading...
                </Typography>
              </Box>
            )}
            {isError && (
              <Typography variant="h6">
                Ошибка получения данных о погоде
              </Typography>
            )}
            {weathers && <WeatherList weather={weathers} />}
          </Grid>
          <MusicPlayer />
        </Container>
      </Box>
    </>
  );
};

export default App;
