import { SxProps } from "@mui/material";
import { Theme } from "@mui/system";

export  const menuItemStyles: SxProps<Theme> = {
    display: "flex",
    
    alignItems: "center",
    "& svg": {
      marginRight: "10px",
      position: "relative",
      marginTop: "px",
    },
    ":hover": {
      color: "rgb(99 60 255 /1)",
    },
  };