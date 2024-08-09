import { Box } from "@mui/material";
import ProfileLogo from "./ProfileLogo";
import TypoInformation from "./TypoInformation";
import ListLinks from "./ListLinks";

function Contaiiner() {
  return (
    <Box
      sx={{
        height: 'auto',
        minHeight: '200px',
        width: '400px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        top: '25%',
        left: { sm: '20%', md: '30%', xl: '40%' },
        alignItems: 'center',
        borderRadius: '15px',
   
       
      }}
    >
      <ProfileLogo />
      <TypoInformation name="mohammed Alkdiadsdcbh" email="dhcdchkdsjn" />
      <ListLinks />
    </Box>
  );
}

export default Contaiiner;
