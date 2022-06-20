import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import HorizontalScrollBar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimliarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h3" mb={5}>
        Similar exercises that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: "2", positition: "relative" }}>
        {targetMuscleExercises.length ? <HorizontalScrollBar /> : <Loader />}
      </Stack>
      <Typography variant="h3" mb={5}>
        Exercises that use the same equipment
      </Typography>
      <Stack direction="row" sx={{ p: "2", positition: "relative" }}>
        {equipmentExercises.length ? <HorizontalScrollBar data={equipmentExercises} /> : <Loader />}
      </Stack>
    </Box>
  );
};

export default SimliarExercises;
