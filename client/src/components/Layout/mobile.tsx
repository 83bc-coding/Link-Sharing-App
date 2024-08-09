import { Box } from "@mui/system";
import { Container } from "./Container";
import { ContainerBar } from "./ContainerBar";
import ListLinksBar from "./ListLinksBar";
import ProfileLogo from "./ProfileLogo";
import { Typography } from "@mui/material";
const ProfileLayout = () => {
  return (
    <Container>
      <ProfileLogo />
      <Box sx={{backgroundColor:'white'}}>
        <Typography variant="h6" sx={{ textAlign:'center'}} gutterBottom>
          mohammed Alkhazraji
        </Typography>
        <Typography variant="subtitle1"  sx={{textAlign:'center',opacity:'0.7'}} gutterBottom>
        asatyn44@gmail.com

</Typography>
      </Box>
      <ContainerBar>
        <ListLinksBar />
      </ContainerBar>
    </Container>
  );
};

export default ProfileLayout;
