import { Box } from "@mui/material";
import React from "react";
import Typograph from "../../../ui/Typograph";
import FileUpload from "./FileUpload";

const UploadIMage = () => {
  return (
    <Box
      sx={{
        height: "auto",
        minHeight: "180px",
        marginTop: "10px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { md: "row", sm: "column", xs: "column" },
      }}
    >
      <Typograph text="Profile picture" />
      <Box>
        {" "}
        <FileUpload />
      </Box>
      <Typograph text="mage must be below 1024x1024px. Use PNG or JPG format" />
    </Box>
  );
};

export default UploadIMage;
