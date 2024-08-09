import Button from "@mui/material/Button";
import { ReactNode } from "react";
type props = {
  children?: ReactNode;
  T?: boolean;
  onClick?: any;
};
const ButtonUi = ({ children, T, onClick }: props) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        color: ` ${T ? "white" : "rgb(99 60 255 /1)"}`,
        borderWidth: "1px",
        borderColor: "rgb(99 60 255 /1)",
        padding: "10px 15px",
        margin: " ",
        fontWeight: "bold",
        backgroundColor: ` ${T ? "rgb(99 60 255 /1)" : ""}`,

        ":hover": {
          backgroundColor: `${
            T ? "rgb(99 60 255 /1)" : "rgb(99 60 255 /0.1)"
          } `,
          borderColor: "rgb(99 60 255 /1)",
        },
        borderRadius: "7px",
      }}
      variant="outlined"
      size="large"
    >
      {children}
    </Button>
  );
};

export default ButtonUi;
