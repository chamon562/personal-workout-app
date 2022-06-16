import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

const SearchExercises = () => {
  return (
    <Stack alignItems="center" mt="38px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "48px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Great Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "800px", sm: "350px" },
            backgroundColor: "#fff",
            borderRadius: "4px",
          }}
          height="76px"
          value=""
          onChange={(e) => {}}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#5DBAE8",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "16px", xs: "12px" },
            height: '55px',
            position: 'absolute',
            right: 0
          }}
          
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
