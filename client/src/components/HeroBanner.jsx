import React, {useState, useEffect} from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImg from "../assets/images/bannerImage.jpeg";




const HeroBanner = () => {


  return (
    <Box
      sx={{
        mt: { lg: "212px", xm: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#5DBAE8" fontWeight="600" fontSize="26px ">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="24px"
        mt="30px"
      >
        Hardwork, Dedication <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective exercises
      </Typography>
      <Button
        variant="contained"
        href="#exercises"
        style={{ height: "50px" }}
        sx={{ backgroundColor: "#5DBAE8", padding: "10px" }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#5DBAE8"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize="200px"
      >
        Exercise
      </Typography>
      <img
        src={HeroBannerImg}
        alt="banner"
        className="hero-banner-img"
        style={{
          boxShadow:
            " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}
      />
    </Box>
  );
};

export default HeroBanner;
