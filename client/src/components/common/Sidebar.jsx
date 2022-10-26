import {
  Drawer,
  List,
  ListItem,
  Box,
  Typography,
  IconButton,
  Link,
} from "@mui/material";
import { LogoutOutlined } from "@mui/icons-material";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import clsx from "clsx";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import assets from "~assets";
// import boardApi from "~api/boardApi";
// import { setBoards } from "~reduxFeatures/boardSlice";

const buttonsList = [
  { href: "/personal", title: "Cá nhân", icon: LibraryMusicOutlinedIcon },
  { href: "/song", title: "Bài hát", icon: LibraryMusicOutlinedIcon },
  { href: "/", title: "Khám phá", icon: LibraryMusicOutlinedIcon },
];
const slidebarWidth = 240;

// is_active: {
//   bgcolor: "background.alphaBg",
//   color: "#fff",
//   borderLeft: "3px solid #9b4de0",
// },
// sidebarButton: {
//   "&:hover": {
//     backgroundColor: "#fff",
//     color: "#3c52b2",
//   },
// },

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const boards = useSelector((state) => state.board.value);
  const user = useSelector((state) => state.user.value);
  // const { boardId } = useParams();
  // const [active, setActive] = useState(boardId);

  const sidebarButtonList = (buttons) => {
    return buttons.map((button, index) => {
      const ButtonIcon = button.icon;
      return (
        <ListItem
          key={index.toString()}
          // className={clsx(classes.sidebarButton, classes.is_active)}
        >
          <Link
            onClick={() => navigate(button.href)}
            underline="none"
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#fff",
              width: "100%",
              fontSize: "13px",
            }}
          >
            <ButtonIcon
              sx={{
                marginRight: "10px",
                flexShrink: 0,
                fontSize: "24px",
              }}
            />
            <Box component="span">{button.title}</Box>
          </Link>
        </ListItem>
      );
    });
  };

  useEffect(() => {
    // const getBoards = async () => {
    //   try {
    //     const res = await boardApi.getAll();
    //     dispatch(setBoards(res));
    //   } catch (error) {
    //     alert(error);
    //   }
    // };
    // getBoards();
  }, [dispatch]);

  // useEffect(() => {
  //   if (boards.length > 0 && boardId === undefined) {
  //     // navigate(`/boards/${boards[0].id}`);
  //   }
  //   const activeItem = boards.findIndex((item) => item.id === boardId);

  //   setActive(activeItem);
  // }, [boards, boardId, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Drawer
      container={window.document.body}
      variant="permanent"
      open={true}
      sx={{
        width: slidebarWidth,
        height: "100vh",

        "& > div": {
          borderRight: "none",
        },
      }}
    >
      <List
        disablePadding
        sx={{
          width: slidebarWidth,
          height: "100vh",
        }}
      >
        <ListItem key="logo">
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "70px",
            }}
          >
            <Typography variant="body2" fontWeight="700">
              {user.username}
            </Typography>
            <IconButton onClick={handleLogout}>
              <LogoutOutlined fontSize="small" />
            </IconButton>
          </Box>
        </ListItem>
        {sidebarButtonList(buttonsList)}
      </List>
    </Drawer>
  );
};

export default Sidebar;
