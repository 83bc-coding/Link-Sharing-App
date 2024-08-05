import ButtonUi from "../../ui/ButtonUi";
import Logo from "./icons/Logo";
import { Container } from "./Container";
import Logout from "./Logout";
import { Box } from "@mui/material";

const NavBar = () => {
  return (
    <Container>
      <Logo />
      <Box
        sx={{
          width: {lg:"15%",md:'25%',sm:'30%',xs:'50%'},
          display: "flex",

          justifyContent: "space-between",
        }}
      >
        {" "}
   <Logout />
        <ButtonUi>Preview</ButtonUi>{" "}
     
      </Box>
    </Container>
  );
};

export default NavBar;
