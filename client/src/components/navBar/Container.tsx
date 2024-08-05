import { Box } from "@mui/material";
import { ReactNode } from "react";

type props = {
  children?: ReactNode;
};
export const Container = ({ children }: props) => {
  return (
    <Box
      component="section"
      sx={{ p: 2,  display: "flex",justifyContent:"space-between",backgroundColor:'white' }}
    >
      {children}
    </Box>
  );
};
