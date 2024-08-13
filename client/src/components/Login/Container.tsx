import { Box } from "@mui/system";
import { ReactNode } from "react";
type props = {
  children?: ReactNode;
};
const Container = ({ children }: props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 8,
        height: "100%",
        justifyContent: "center",
        textAlign: "left",
        width: "60%",
      }}
    >
      {children}
    </Box>
  );
};

export default Container;
