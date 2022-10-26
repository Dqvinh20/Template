import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useState } from "react";
import CssBaseLine from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AppLayout, AuthLayout } from "~layout";
import { Home, Login, Signup } from "~pages";
import { darkTheme, lightTheme } from "~assets/themes";

function App() {
  const [light, setLight] = useState(false);

  return (
    <ThemeProvider theme={light ? lightTheme : darkTheme}>
      <CssBaseLine />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            {/* <Route path="song" element={<Song />}> */}
            {/* <Route path="boards" element={<Home />} /> */}
            {/* <Route path="boards/:boardId" element={<Board />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
