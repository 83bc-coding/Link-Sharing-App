import Button from "@mui/material/Button";
import { ReactNode } from "react";
type props = {
  children?: ReactNode;
};
const ButtonUi = ({ children }: props) => {
  return (
    <Button
      sx={{
        color: "rgb(99 60 255 /1)",
        borderWidth: "1px",
        borderColor: "rgb(99 60 255 /1)",
        padding: "10px 15px",
        margin: "auto",
        fontWeight:'bold',
        ":hover": {
          backgroundColor: "rgb(99 60 255 /0.1)",
          borderColor: "rgb(99 60 255 /1)",
        },
        borderRadius:'7px'
      }}
      variant="outlined"
      size="large"
    >
      {children}
    </Button>
  );
};

export default ButtonUi;
