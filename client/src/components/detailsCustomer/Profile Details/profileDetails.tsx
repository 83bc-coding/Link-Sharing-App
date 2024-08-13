 import Title from "../../../ui/Title";
import { Container } from "./Container";
import UploadIMage from "./UploadIMage";
import InputFiled from "../../../ui/InputFiled";
import { useContext } from "react";
import { UserContext, UserContextValue } from "../../../Context/userContext";
import HandaleDatailse from "../HandaleDatailse";

const ProfileDetails = () => {
  const { updateFirstName,user,updateLastName } = useContext(UserContext) as UserContextValue;

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFirstName(e.target.value);
  }
  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateLastName(e.target.value);
  }
  return (
    <Container>
      <Title
        title="Profile Details"
        description="Add your details to create a personal touch to your profile."
      />
       <UploadIMage/>  
   <InputFiled title="First name" onChange={handleNameChange} value={user?.firstName?user.firstName : "" }/>
   <InputFiled title="Last name" onChange={handleLastNameChange} value={user?.lastName?user.lastName : "" }/>
   <InputFiled title="Email" value={user?.email?user.email : "" } disable/>
   <HandaleDatailse/>
    </Container>
  );
};

export default ProfileDetails;
