import { Typography } from '@mui/material'
 import DeleteIcon from "@mui/icons-material/Delete";

const DeletLogo = () => {
  return (
    <Typography
    variant="h6"
    sx={{
      position: "relative",
      left: "90%",
      top: "-40px",
      ":hover": { cursor: "pointer" },
    }}
  >
    <DeleteIcon />
  </Typography>
  )
}

export default DeletLogo