import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";
// Footer is component
const Footer = () => {
  return (
    <Box bgcolor="#fff" width="100%">
      <Stack gap="40px" alignItems="center" justifyContent="center" px="40px" p="24px">
        <Typography >
         ❤ Channee Math {new Date().getFullYear()}
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
