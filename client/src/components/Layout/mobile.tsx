import { Box } from "@mui/material";

import phoneLayout from "../../assets/image/illustration-phone-mockup.svg";
const ProfileLayout = () => {
  return (
 
      <Box
        sx={{
          height: "700px",
          width: "49%",
          backgroundColor:'white',
          backgroundImage: `URL(${phoneLayout})`,
          backgroundPosition: "center center ",
          backgroundSize: "18rem",
          backgroundRepeat: "no-repeat",
          display:{
           xs:"none", sm:'none',md:'block'
          },
     
  
        }}
      ></Box>
 
  );
};

export default ProfileLayout;
