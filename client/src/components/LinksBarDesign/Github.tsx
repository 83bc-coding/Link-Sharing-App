import { Box } from '@mui/material'
import GitHubIcon from "@mui/icons-material/GitHub";

const Github = () => {
  return (
    <Box
    sx={{
      height: "50px",
      width: "100%",
      backgroundColor: "black",
      borderRadius: "10px",
      color: "white",
      display: "flex",
      justifyContent: "left",
      alignItems: "center",
       marginTop:'10px'
    }}
  >
    <GitHubIcon sx={{ margin: "  15px" }} />
    Github

  </Box>
  )
}

export default Github