import React, { useContext, useRef } from "react";
import { Box } from "@mui/material";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import AddIcon from "@mui/icons-material/Add";
import { UserContext, UserContextValue } from "../../../Context/userContext";

const FileUpload: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { addProfileImage, user } = useContext(UserContext) as UserContextValue;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        addProfileImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onChooseFile = () => {
    inputRef.current?.click();
  };

  console.log(user?.avatar);
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${user?.avatar})`,
          backgroundSize: "11rem",
          backgroundPosition: "center center ",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          height: "110px",
          width: "180px",
          overflow: "hidden",
          margin: "0px 15px",
          border: `${user?.avatar ? "1.5px solid #5d4dcc" : "   "}`,
          borderRadius: "15px",
          color: `${user.avatar ? "#5d4dcc" : "#fff"}`,
        }}
        onClick={onChooseFile}
      >
        <input
          ref={inputRef}
          type="file"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        <Box
          sx={{
            height: "150px",
            width: "330px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "20px",
            cursor: "pointer",
          }}
          className="file-btn"
          onClick={onChooseFile}
        >
          <DriveFolderUploadIcon sx={{ fontSize: "40px" }} />
          <span>
            <AddIcon /> upload
          </span>
          Image
        </Box>
      </Box>
    </>
  );
};

export default FileUpload;
 