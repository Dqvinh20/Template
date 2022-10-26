import { Box, IconButton, InputBase } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { useEffect, useState } from "react";

const SearchBox = () => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {};

  const handleClearClick = () => setInput("");
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{
        display: "flex",
        alignItems: "center",
        fontSize: "14px",
        lineHeight: "21px",

        borderRadius: "20px",
        maxWidth: "540px",
        height: "40px",
        backgroundColor: "background.alphaBg",
      }}
    >
      <IconButton
        disableRipple
        sx={{
          display: "flex",
          alignItems: "center",
          "&.MuiButtonBase-root:hover": {
            bgcolor: "transparent",
          },
        }}
      >
        <SearchIcon />
      </IconButton>
      <InputBase
        id="search"
        type="text"
        placeholder="Tìm kiếm bài hát..."
        fullWidth
        value={input}
        onChange={(e) => setInput(e.target.value)}
        endAdornment={
          <IconButton
            sx={{ visibility: input ? "visible" : "hidden" }}
            onClick={handleClearClick}
          >
            <ClearIcon />
          </IconButton>
        }
      ></InputBase>
    </Box>
  );
};

export default SearchBox;
