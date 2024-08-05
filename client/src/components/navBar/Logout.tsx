import { Box, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
const Logout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
 
        width: "90px",
        alignItems: "center",
        cursor:'pointer',
        ":hover":{
            color:'rgb(99 60 255 /0.7)'
        }
      }}
    >
      {" "}
      <LogoutIcon />
      <Typography variant="body1">Logout</Typography>
    </Box>
  );
};

export default Logout;
