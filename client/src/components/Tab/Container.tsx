import { Box } from "@mui/material";
import { ReactNode } from "react";

type props = {
  children?: ReactNode;
};
export const Container = ({ children }: props) => {
  return (
    <Box
      sx={{
        width: { md: "50%", sm: "100%" },
        backgroundColor: "white",
        minHeight: 200,
      }}
    >
      {children}
    </Box>
  );
};
