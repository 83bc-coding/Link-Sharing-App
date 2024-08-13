import { Box } from "@mui/material";
import ProfileLogo from "./ProfileLogo";
import TypoInformation from "./TypoInformation";
import ListLinks from "./ListLinks";
import { useContext } from "react";
import { UserContextPreview, UserContextValuePreview } from "../../../Context/preview/userContextPreview";

function Contaiiner() {
  const { user } = useContext(UserContextPreview) as UserContextValuePreview;

  return (
    <Box
    sx={{
       width: '400px',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'white',
      top: '35%',
      left: { sm: '20%', md: '30%', xl: '40%' },
      alignItems: 'center',
      borderRadius: '15px',}}
    >
      <ProfileLogo />
      <TypoInformation firstName={user?.firstName} lastName={user?.lastName} email={user?.email} />
      <ListLinks />
    </Box>
  );
}

export default Contaiiner;
