import { Box } from '@mui/material'
 import LinkedInIcon from "@mui/icons-material/LinkedIn";

const LinkedIn = () => {
  return (
    <Box
    sx={{
      height: "50px",
      width: "100%",
      backgroundColor: "rgb(45 104 255/1)",
      borderRadius: "10px",
     color: "white",
      display: "flex",
      justifyContent: "left",
      alignItems: "center",
      marginTop:'10px'
    }}
  >
    <LinkedInIcon sx={{ margin: "  15px" }} />
   LinkeIn
  </Box>
  )
}

export default LinkedIn