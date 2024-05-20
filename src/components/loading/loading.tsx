import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

const Loading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <CircularProgress color="primary" />
      <Typography variant="h6" mt={2}>
        Загрузка...
      </Typography>
    </Box>
  );
};

export default Loading;
