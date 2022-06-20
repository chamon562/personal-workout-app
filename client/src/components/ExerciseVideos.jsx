import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import ReactPlayer from "react-player/youtube";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <div>Loading...</div>;

  return (
    <Box sx={{ mt: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h3" mb="33px">
        Watch{" "}
        <span style={{ color: "#5dbae8", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      {/* loop over exercise videos create a stack */}
      <Stack
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { lg: "row", gap: { lg: "110px", xs: "0" } },
          gap: "20px",
        }}
      >
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          // <a
          //   key={index}
          //   className="exercise-video"
          //   href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
          //   target="_blank"
          //   rel="noreferrer"
          // >
          <Box
            key={index}
            sx={{
              backgroundColor: "#ffffff",
              borderRadius: "5px",
            }}
          >
            <ReactPlayer
              key={index}
              className="exercise-video"
              controls="true"
              url={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            />
            <Box>
              <Typography variant="h5" color="#000" m="0 10px 5px">
                {item.video.title}
              </Typography>
              <Typography variant="h8" color="#000"  m="0 10px">
                {item.video.channelName}
              </Typography>
            </Box>
          </Box>
          // </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
