import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import authUtils from "~utils/authUtils";
import { Loading, Sidebar, Header } from "~components/common";
import { setUser } from "~reduxFeatures/userSlice";

const AppLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const user = await authUtils.isAuthenticated();
      if (!user) {
        navigate("/login");
      } else {
        // save user
        dispatch(setUser(user));
        setLoading(false);
      }
    };

    checkAuth();
  }, [navigate]);

  return loading ? (
    <Loading fullHeight />
  ) : (
    <Box
      sx={{
        bgcolor: "background.default",
        display: "flex",
      }}
    >
      <Sidebar />
      <Box
        sx={{
          m: 0,
          p: 0,
          flexGrow: 1,
          width: "max-content",
        }}
      >
        <Header />

        <Outlet />
      </Box>
    </Box>
  );
};

export default AppLayout;
