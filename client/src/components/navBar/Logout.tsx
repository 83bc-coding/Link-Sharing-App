import { Box, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useContext } from "react";
import { UserContext, UserContextValue } from "../../Context/userContext";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const { deleteUser } = useContext(UserContext) as UserContextValue;
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",

        width: "90px",
        alignItems: "center",
        cursor: "pointer",
        ":hover": {
          color: "rgb(99 60 255 /0.7)",
        },
      }}
      onClick={() => {
        deleteUser();
        navigate("/login");
      }}
    >
      {" "}
      <LogoutIcon />
      <Typography variant="body1">Logout</Typography>
    </Box>
  );
};

export default Logout;
