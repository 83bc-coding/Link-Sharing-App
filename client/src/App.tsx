import { Box } from "@mui/material";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Preview from "./components/Preview/Preview";
import ConnectedLogin from "./components/Login/ConnectedLogin";
import ConnectedRegister from "./components/Register/ConnectedRegister";
import Providers from "./Providers";
import Home from "./Home";

function App() {
  return (
    <Box
      sx={{
        backgroundColor: "#e5e7eb",
        margin: "0",
        padding: "0",
        height: "auto",
        minHeight: "100vh",
      }}
    >
      <BrowserRouter>
        <Providers>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/preview/:id" element={<Preview />} />
            <Route path="/login" element={<ConnectedLogin />} />
            <Route path="/register" element={<ConnectedRegister />} />
          </Routes>
        </Providers>
      </BrowserRouter>
      <Outlet />
    </Box>
  );
}

export default App;
