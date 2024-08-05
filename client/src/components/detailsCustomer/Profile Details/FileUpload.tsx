import React, { useRef, useState } from "react";
 
import { Box } from "@mui/material";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import AddIcon from "@mui/icons-material/Add";
interface SelectedFile extends File {
  preview: string;
}

const FileUpload: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [selectedFile, setSelectedFile] = useState<SelectedFile | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [uploadStatus, setUploadStatus] = useState<
    "select" | "uploading" | "done"
  >("select");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0] as SelectedFile;
      file.preview = URL.createObjectURL(file);
      setSelectedFile(file);
    }
  };

  const onChooseFile = () => {
    inputRef.current?.click();
  };

  console.log(selectedFile);
  return (
    <>
      <Box
        sx={{
          backgroundImage: `URL(${selectedFile ? selectedFile.preview : ""})`,
          backgroundSize: "11rem",
          backgroundPosition: "center center ",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          height: "140px",
          width: "180px",
          overflow: "hidden",
          margin: "0px 15px",
          border: `${selectedFile ? "" : " 1.5px solid #5d4dcc  "}`,
          borderRadius: "15px",
          color: `${selectedFile ? "#fff" : "#5d4dcc"}`,
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
