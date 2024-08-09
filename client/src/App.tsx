import { Box } from "@mui/material";
import DetailsCustomer from "./components/detailsCustomer/DetailsCustomer";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar/navBar";
import Preview from "./components/Preview/Preview";
import ConnectedLogin from "./components/Login/ConnectedLogin";
import ConnectedRegister from "./components/Register/ConnectedRegister";
import { CardProvider } from "./Context/LinksContext";

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
        <CardProvider>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <NavBar />
                  <DetailsCustomer />
                </>
              }
            />
            <Route path="/preview" element={<Preview />} />
            <Route path="/login" element={<ConnectedLogin />} />
            <Route path="/register" element={<ConnectedRegister />} />
          </Routes>
        </CardProvider>
      </BrowserRouter>
      <Outlet />
    </Box>
  );
}

export default App;
