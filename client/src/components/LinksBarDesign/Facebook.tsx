import { Box } from '@mui/system'
import FacebookIcon from "@mui/icons-material/Facebook";

const Facebook = () => {
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
    <FacebookIcon sx={{ margin: "  15px" }} />
    Facebook
  </Box>
  )
}

export default Facebook