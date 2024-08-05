import { Box } from "@mui/material";
import Title from "../../../ui/Title";
import { Container } from "./Container";
import UploadIMage from "./UploadIMage";
import InputFiled from "../../../ui/InputFiled";

const ProfileDetails = () => {
  return (
    <Container>
      <Title
        title="Profile Details"
        description="Add your details to create a personal touch to your profile."
      />
       <UploadIMage/>  
   <InputFiled title="First name" value="mohammed"/>
   <InputFiled title="Last name" value="Alkhazraji"/>
   <InputFiled title="Email" value="asatyn44@gmail.com" disable/>
    </Container>
  );
};

export default ProfileDetails;
