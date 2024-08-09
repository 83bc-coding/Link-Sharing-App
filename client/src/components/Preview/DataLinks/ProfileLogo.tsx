import { Box } from '@mui/material'
 import profile from "../../../assets/image/Screenshot-2024-06-02-001335.svg";

const ProfileLogo = () => {
  return (
    <Box
    sx={{
        height: "90px",
        width: "90px",
        backgroundImage: `URL(${profile})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "7rem",
        backgroundPosition: "center center ",
        position:  "absolute",
        top: "55px",
        borderRadius: "100%",
        border:'2px solid  rgb(99 60 255 /1) '
    }}
  ></Box>  )
}

export default ProfileLogo