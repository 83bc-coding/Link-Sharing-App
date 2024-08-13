import { Box } from "@mui/material";
import { UserContext, UserContextValue } from "../../Context/userContext";
import { useContext } from "react";

const ProfileLogo = () => {
  const { user } = useContext(UserContext) as UserContextValue;
  return (
    <Box
      sx={{
        height: "90px",
        width: "90px",
        backgroundImage: `URL(${user?.avatar})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "7rem",
        backgroundPosition: "center center ",
        position: "relative",
        top: "115px",
        borderRadius: "100%",
      }}
    ></Box>
  );
};

export default ProfileLogo;
