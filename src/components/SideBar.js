import { Avatar, Box, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import TvIcon from "@mui/icons-material/Tv";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import UpdateIcon from "@mui/icons-material/Update";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

function SideBar() {
  const ListItem = ({ title, icon, active = false }) => {
    return (
      <Grid
        container
        sx={{
          marginY: "8px",
          borderRight: active ? "3px solid #00E0FF" : "",
          paddingLeft: "56px",
        }}
      >
        <Grid
          item
          sx={{ color: active ? "#00E0FF" : "white", fontSize: "15px" }}
        >
          {icon}
        </Grid>
        <Grid
          item
          sx={{
            fontSize: "15px",
            color: active ? "#00E0FF" : "white",
            fontWeight: "600",
            marginLeft: "10px",
          }}
        >
          {title}
        </Grid>
      </Grid>
    );
  };
  return (
    <Box
      sx={{
        width: { xs: "0", md: "275px" },
        overflow: "hidden",
        minHeight: "100vh",
        backgroundColor: "#1F2A3C",
        position: "fixed",
      }}
    >
      <Stack alignItems={"center"} sx={{ paddingTop: "40px" }} spacing={2}>
        <Avatar src="/profilePhoto.svg" sx={{ width: "7vw", height: "7vw" }} />
        <Typography
          sx={{ fontSize: "20px", color: "#FFFFFF", fontWeight: "600" }}
        >
          Eric Hoffman
        </Typography>
      </Stack>
      <Divider
        orientation="horizontal"
        sx={{ background: "#394B61", marginTop: "20px" }}
      />

      <Stack sx={{ marginTop: "16px" }}>
        <ListItem
          active={true}
          title={"Discover"}
          icon={<SearchIcon sx={{ color: "inherit" }} />}
        />
        <ListItem
          title={"Playlist"}
          icon={<PlaylistPlayIcon sx={{ color: "inherit" }} />}
        />
        <ListItem
          title={"Movie"}
          icon={<LiveTvIcon sx={{ color: "inherit" }} />}
        />
        <ListItem
          title={"TV Shows"}
          icon={<TvIcon sx={{ color: "inherit" }} />}
        />
        <ListItem
          title={"My List"}
          icon={<FormatListBulletedIcon sx={{ color: "inherit" }} />}
        />
      </Stack>

      <Divider
        orientation="horizontal"
        sx={{ background: "#394B61", marginTop: "20px" }}
      />
      <Stack sx={{ marginTop: "16px" }}>
        <ListItem
          title={"Watch Later"}
          icon={<UpdateIcon sx={{ color: "inherit" }} />}
        />
        <ListItem
          title={"Recomended"}
          icon={<FavoriteBorderIcon sx={{ color: "inherit" }} />}
        />
      </Stack>

      <Divider
        orientation="horizontal"
        sx={{ background: "#394B61", marginTop: "20px" }}
      />

      <Stack sx={{ marginTop: "16px" }}>
        <ListItem
          title={"Settings"}
          icon={<SettingsIcon sx={{ color: "inherit" }} />}
        />
        <ListItem
          title={"Logout"}
          icon={<LogoutIcon sx={{ color: "inherit" }} />}
        />
      </Stack>
    </Box>
  );
}

export default SideBar;
