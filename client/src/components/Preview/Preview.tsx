import { Box } from "@mui/system";
 import { Container } from "./Container";
import Contaiiner from "./DataLinks/Container";
import NavBar from "./navBar/NavBar";
  
 
const Preview = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        
      }}
    >
      <Container>
        <NavBar />
        <Contaiiner />{" "}
      </Container>
    </Box>
  );
};

export default Preview;
