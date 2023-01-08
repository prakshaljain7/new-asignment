import { BorderAll } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import "animate.css";

function MovieExpandedCard({ movie }) {
  console.log(movie);
  console.log(parseFloat(movie.imdbRating) / 10);
  return (
    <Box
      sx={{
        //   animation: "expand",
        animationDuration: "1s",
        //   animationTimingFunction: "linear",
        height: "70vh",
        width: "100%",
        animationDuration: "1s",
        animationTimingFunction: "linear",
        marginBottom: "50px",
      }}
      className="animate__animated animate__backInDown"
    >
      <Box
        sx={{
          animationDuration: "1s",
          backgroundColor: "#394B61",
          borderRadius: "11px",
          width: "100%",
          height: "100%",
          marginTop: "50px",
          animationTimingFunction: "linear",
          animationDelay: "1s",
        }}
        className="animate__animated animate__zoomIn"
      >
        <Grid container>
          <Grid item md={3.5} container justifyContent={"flex-start"}>
            <img
              src={movie.Poster.split(" ").join("")}
              style={{
                width: "auto",
                height: "70vh",
                borderRadius: "11px 0 0 11px",
                position: "relative",
                left: "0",
              }}
            />
          </Grid>
          <Grid item md={8.5}>
            <Stack
              textAlign={"left"}
              sx={{ color: "#D4D7DD", padding: "34px", fontWeight: "600" }}
              spacing={2.5}
            >
              <Typography
                sx={{ fontSize: "30px", fontWeight: "700", color: "#D4D7DD" }}
              >
                {movie.Title}
              </Typography>

              <Grid container sx={{ width: "40%" }} alignItems="center">
                <Grid item>
                  <LinearProgress
                    variant="determinate"
                    sx={{
                      width: "111px",
                      height: "8px",
                      borderRadius: "5px",
                      backgroundColor: "#283647",
                    }}
                    color="primary"
                    value={parseFloat(movie.imdbRating) * 10}
                  />
                </Grid>
                <Grid
                  item
                  sx={{ marginLeft: "10px" }}
                >{`${movie.imdbRating}/10`}</Grid>
              </Grid>

              <Grid container sx={{ width: "40%" }}>
                <Grid item xs={6}>
                  Year:
                </Grid>
                <Grid item xs={6}>
                  {movie.Year}
                </Grid>
              </Grid>

              <Grid container sx={{ width: "40%" }}>
                <Grid item xs={6}>
                  Running Time:
                </Grid>
                <Grid item xs={6}>
                  {movie.Runtime}
                </Grid>
              </Grid>

              <Grid container sx={{ width: "40%" }}>
                <Grid item xs={6}>
                  Directed by:
                </Grid>
                <Grid item xs={6}>
                  {movie.Director}
                </Grid>
              </Grid>

              <Grid container sx={{ width: "40%" }}>
                <Grid item xs={6}>
                  language:
                </Grid>
                <Grid item xs={6}>
                  {movie.Language}
                </Grid>
              </Grid>

              <Typography>{movie.Plot}</Typography>

              <Grid container>
                <Grid item>
                  <Button variant="contained" sx={{ fontWeight: "700" }}>
                    Play Movie
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" sx={{ marginLeft: "10px" }}>
                    Watch Trailer
                  </Button>
                </Grid>
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default MovieExpandedCard;
