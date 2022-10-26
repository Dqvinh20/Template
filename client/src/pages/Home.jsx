import { Box } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import boardApi from "~api/boardApi";
import { setBoards } from "~reduxFeatures/boardSlice";
import { useState } from "react";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleCreateBoard = async () => {
    setLoading(true);
    try {
      const res = await boardApi.create();
      dispatch(setBoards([res]));
      navigate(`/boards/${res.id}`);
    } catch (error) {
      console.log(error);
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <LoadingButton
        variant="outlined"
        color="success"
        onClick={handleCreateBoard}
        loading={loading}
      >
        Click here to create your first board
      </LoadingButton> */}
    </Box>
  );
}

export default Home;
