import { Container, Typography } from "@mui/material";
import { ReactNode } from "react";
import MContainer from "../Register/Container";
import Logo from "../icons/Logo";
type props = {
  children?: ReactNode;
};
const Login = ({ children }: props) => {
  return (
    <Container
      component="main"
      maxWidth="lg"
      sx={{
        height: "600px",
 
        width: "100%",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <MContainer>
        <Logo />
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            width: "100%",
            marginTop: "60px",
            fontWeight: "bold",
          }}
          gutterBottom
        >
          Create account{" "}
        </Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: "center", width: "100%", opacity: "0.7" }}
          gutterBottom
        >
          Let's get you started sharing your links!
        </Typography>
        {children}
      </MContainer>
    </Container>
  );
};

export default Login;
