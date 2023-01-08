import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function MovieCard({ movie }) {
  return (
    <Box
      sx={{
        padding: "8px",
        backgroundColor: "#394B61",
        height: "100%",
        borderRadius: "11px",
      }}
    >
      <Stack textAlign={"left"} spacing={1}>
        <img
          src={movie.Poster.split(" ").join("")}
          style={{
            width: "100%",
            height: { xs: "auto", md: "15vw" },
            borderRadius: "11px",
          }}
        ></img>
        <Typography sx={{ color: "#FFFFFF" }}>{movie.Title}</Typography>
        <Grid container>
          <Grid item>
            <PlayCircleOutlineIcon sx={{ color: "#FFFFFF" }} />
          </Grid>
          <Grid item>
            <AddCircleOutlineIcon sx={{ color: "#FFFFFF" }} />
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}

export default MovieCard;
