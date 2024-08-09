import { Box } from "@mui/material";
import { ReactNode } from "react";

type props = {
  children?: ReactNode;
};
export const ContainerBar = ({ children }: props) => {
  return (
    <Box
      sx={{
        height: "300px",
        width: "225px",
        position: "relative",
        top: "-14%",
        
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      {children}
    </Box>
  );
};
