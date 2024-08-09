import { Box, css } from '@mui/system'
 import InstagramIcon from "@mui/icons-material/Instagram";

const Instagram = () => {
  return (
    <Box
    sx={css`
        height: 50px;
        width: 100%;
        background-color: #128C7E;
        border-radius: 10px;
        color: white;
        display: flex;
        justify-content: left;
        align-items: center;
        margin-top: 10px;
        background: #833ab4;
        background: linear-gradient(to right, #833ab4, #fd1d1d, #fcb045);
      `}
  >
    <InstagramIcon sx={{ margin: "  15px" }} />
    Instagram
  </Box>  )
}

export default Instagram