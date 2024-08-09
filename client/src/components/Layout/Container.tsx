import { Box } from "@mui/material";
import { ReactNode } from "react";
import phoneLayout from "../../assets/image/illustration-phone-mockup.svg";

type props = {
  children?: ReactNode;
};
export const Container = ({ children }: props) => {
  return (
    <Box
      component="section"
      sx={{
        height: "700px",
        width: "49%",
        backgroundColor: "white",
        backgroundImage: `URL(${phoneLayout})`,
        backgroundPosition: "center center ",
        backgroundSize: "18rem",
        backgroundRepeat: "no-repeat",
        display: {
          xs: "none",
          sm: "none",
          md: "flex",
        },
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "inherit",
      }}    >
      {children}
    </Box>
  );
};
