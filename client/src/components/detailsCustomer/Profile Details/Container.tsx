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
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "white",
        flexDirection: "column",
        width:'60%',
        overflow:'hidden',
        marginTop:'8px'
      }}
    >
      {children}
    </Box>
  );
};
