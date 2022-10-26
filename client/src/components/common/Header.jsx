import { useSelector, useDispatch } from "react-redux";
import { Box, Typography, Avatar, IconButton } from "@mui/material";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import SearchBox from "./SearchBox";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */
  return color;
}

function stringAvatar(name) {
  const splitName = name.split(" ");

  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children:
      splitName.length < 2
        ? `${name[0]}`
        : `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const Header = () => {
  const user = useSelector((state) => state.user.value);

  return (
    <Box
      sx={{
        position: "fixed",
        display: "flex",
        alignItems: "center",
        right: 0,
        top: 0,
        left: 240,
        height: "70px",
        zIndex: 99,

        padding: "0 59px",
      }}
    >
      <Box sx={{ flexGrow: 1, marginRight: "10px" }}>
        <SearchBox />
      </Box>
      <Box>
        <IconButton
          onClick={() => {
            alert("clicked");
          }}
        >
          <Avatar {...stringAvatar(user.username)}></Avatar>
        </IconButton>
        {/* <Typography variant="h6">Hello, {user.username}</Typography> */}
      </Box>
    </Box>
  );
};

export default Header;
