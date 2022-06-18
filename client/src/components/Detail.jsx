import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import BodyPart from "../assets/icons/body-part.png";
import Target from "../assets/icons/target.png";
import Equipment from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPart,
      name: bodyPart,
    },
    {
      icon: Target,
      name: target,
    },
    {
      icon: Equipment,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3" color="#5dbae8">
          {name}
        </Typography>
        <Typography variant="h6">
          Exercises keep you strong.{" "}
          <span style={{ color: "#a9aaff", fontWeight: "bold" }}>{name} </span>
          is one of the best exercises to target your{" "}
          <span style={{ color: "#a9aaff", fontWeight: "bold" }}>
            {target}{" "}
          </span>
          . It will help you improve your mood and energy
        </Typography>
        {extraDetail.map((item) => (
          <Stack key={item.name} direction="row" gap="24" alignItems="center">
            <Button
              sx={{
                background: "#aedff7",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
                marginRight: "20px",
              }}
            >
              <img
                style={{
                  objectFit: "contain",
                  padding: "5px",
                  filter: "grayscale(100%)",
                  width: "50px",
                  height: "50px",
                }}
                src={item.icon}
                alt={bodyPart}
              />
            </Button>
            <Typography textTransform="capitalize" variant="h5">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
