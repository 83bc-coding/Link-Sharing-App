import { Box } from '@mui/material'
 import { useContext } from 'react';
import { UserContextPreview, UserContextValuePreview } from '../../../Context/preview/userContextPreview';

const ProfileLogo = () => {
  const { user } = useContext(UserContextPreview) as UserContextValuePreview;

  return (
    <Box
    sx={{
        height: "90px",
        width: "90px",
        backgroundImage: `URL(${user?.avatar})`,
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