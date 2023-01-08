import { Box, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { movieData } from "../utils/MovieData";
import MovieCard from "./MovieCard";
import LightModeIcon from "@mui/icons-material/LightMode";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import MovieExpandedCard from "./MovieExpandedCard";
import CloseIcon from "@mui/icons-material/Close";

function MovieList() {
  const [openSearch, setOpenSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [active, setActive] = useState(null);
  console.log(movieData);
  return (
    <Box
      sx={{
        width: { xs: "100vw", md: "calc(100vw - 275px)" },
        height: "100vh",
        overflow: "scroll",
        marginLeft: { xs: "0", md: "275px" },
        backgroundColor: "#273244",
        "&::-webkit-scrollbar": {
          width: "0px",
        },
      }}
    >
      <Box sx={{ Width: "100%", paddingX: "48px" }}>
        <Grid
          container
          justifyContent={"space-between"}
          sx={{ marginTop: "50px" }}
        >
          <Grid item justifyContent="flex-start">
            {openSearch && (
              <TextField
                sx={{
                  animation: "expand",
                  animationDuration: "1s",
                  color: "#FFFFFF",
                  width: "400px",
                  backgroundColor: "#1A2536",
                  input: { color: "#FFFFFF" },
                }}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                InputProps={{
                  startAdornment: <SearchIcon sx={{ color: "white" }} />,
                  endAdornment: (
                    <CloseIcon
                      sx={{ color: "white", cursor: "pointer" }}
                      onClick={() => setOpenSearch(false)}
                    />
                  ),
                }}
                placeholder="Title,Movies,Keywords"
              />
            )}
            {!openSearch && (
              <SearchIcon
                sx={{ color: "white" }}
                onClick={() => setOpenSearch(true)}
              />
            )}
          </Grid>
          <Grid item>
            <LightModeIcon sx={{ color: "#FFFFFF", fontSize: "22px" }} />
            <MoreVertIcon sx={{ color: "#FFFFFF", fontSize: "22px" }} />
          </Grid>
        </Grid>
        <Grid container sx={{ width: "100%" }}>
          {movieData
            .filter((movie, index) => {
              return movie.Title.toLowerCase().includes(search.toLowerCase());
            })
            .map((movie, index) => (
              <>
                {index % 5 == 0 &&
                  active != null &&
                  active < index + 5 &&
                  active >= index && (
                    <MovieExpandedCard movie={movieData[active]} />
                  )}
                <Grid
                  item
                  xs={12}
                  md={2}
                  key={index}
                  sx={{ marginTop: "50px" }}
                  onClick={() => {
                    setActive(null);
                    setActive(index);
                  }}
                >
                  <MovieCard movie={movie} />
                </Grid>
                {index % 5 != 4 && <Grid item md={0.5}></Grid>}
              </>
            ))}
          {movieData.filter((movie, index) => {
            return movie.Title.toLowerCase().includes(search.toLowerCase());
          }).length == 0 && (
            <Typography sx={{ color: "#FFFFFF", marginTop: "20px" }}>
              No results found for your search.
            </Typography>
          )}
        </Grid>
      </Box>
    </Box>
  );
}

export default MovieList;
