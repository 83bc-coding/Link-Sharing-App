import { Box } from "@mui/material";
import { ReactNode } from "react";

type props = {
  children?: ReactNode;
};
export const Container = ({ children }: props) => {
  return (
    <Box
      component="section"
      sx={{
        p: 4,
        
       
        backgroundColor: "white",
       
        width:'80%',
        overflow:'scrol',
        marginTop:'8px',
        height:'500px'
      }}
    >
      {children}
    </Box>
  );
};
