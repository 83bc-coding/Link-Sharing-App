import ButtonUi from "../../ui/ButtonUi";
import Logo from "../icons/Logo";
import { useNavigate } from "react-router";
import { Container } from "./Container";
import Logout from "./Logout";
import { Box } from "@mui/material";
import { useContext } from "react";
import { UserContext, UserContextValue } from "../../Context/userContext";
const NavBar = () => {
  const { user } = useContext(UserContext) as UserContextValue;

  const navigate = useNavigate();
  return (
    <Container>
      <Logo />
      <Box
        sx={{
          width: { lg: "20%", md: "30%", sm: "35%", xs: "50%" },
          display: "flex",

          justifyContent: "space-between",
        }}
      >
        {" "}
        <Logout />
        <ButtonUi
          onClick={() => {
            navigate(`/preview/${user?._id}`);
          }}
        >
          Preview
        </ButtonUi>{" "}
      </Box>
    </Container>
  );
};

export default NavBar;
