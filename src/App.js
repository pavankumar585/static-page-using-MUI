import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Add from "./components/Add";
import { Stack, Box, createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const theme = createTheme({ palette: { mode } });

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor="background.default" color="text.primary">
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
