import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Grid } from "@mui/material";

const WeatherForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  const handleFormSubmit = (data) => {
    onSubmit(data.city);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <TextField {...register("city")} label="City" variant="outlined" />
        </Grid>
        <Grid item>
          <Button type="submit" variant="contained" color="primary">
            Поиск
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default WeatherForm;
