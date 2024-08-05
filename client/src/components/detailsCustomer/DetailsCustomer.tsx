import { Box } from "@mui/material";
import ProfileLayout from "../Layout/mobile";
import Taps from "./Taps";

const DetailsCustomer = () => {
  return (
    <Box
      sx={{
        height: "700px",
        width: "100%", 
        marginTop: "50px",
        display:'flex',
        justifyContent:'space-between',
      }}
    > 
      <ProfileLayout />
      <Taps />
    </Box>
  );
};

export default DetailsCustomer;
