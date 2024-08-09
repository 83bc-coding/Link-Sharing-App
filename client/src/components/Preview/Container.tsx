import { Box } from "@mui/material";
import { ReactNode } from "react";

type props = {
  children?: ReactNode;
};
export const Container = ({ children }: props) => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "rgb(99 60 255 /1)",
        height: "350px",

        display: "flex",
        flexDirection: "column",
        
      }}
    >
      {children}
    </Box>
  );
};
