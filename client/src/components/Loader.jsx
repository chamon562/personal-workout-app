import React from "react";
import { Stack } from "@mui/material";
import {
  Circles,
  Audio,
  BallTriangle,
  Bars,
  Grid,
  Oval,
  Puff,
  Rings,
  TaiSpin,
  ThreeDots,
} from "react-loader-spinner";

const Loader = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <Bars color="#5dbae8" />
    </Stack>
  );
};

export default Loader;
