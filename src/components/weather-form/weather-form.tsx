import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Grid } from "@mui/material";

const WeatherForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    onSubmit(data.city);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <TextField
            {...register("city", {
              required: "City is required",
              maxLength: {
                value: 60,
                message: "City name cannot exceed 60 characters",
              },
            })}
            label="Введите название города"
            sx={{
              "& label": { color: "#39ff14" },
              "& input": {
                color: "#39ff14",
                borderColor: "#d800ff",
                boxShadow: "0 0 10px #d800ff",
              },
            }}
            variant="outlined"
            error={!!errors.city}
            helperText={errors.city ? String(errors.city.message) : ""}
          />
        </Grid>
        <Grid item>
          <Button
            sx={{
              backgroundColor: "#d800ff",
              color: "#fff",
              boxShadow: "0 0 10px #d800ff",
            }}
            type="submit"
            variant="contained"
            color="primary"
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default WeatherForm;
