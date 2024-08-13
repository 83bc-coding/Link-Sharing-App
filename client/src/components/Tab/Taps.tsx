import React  from "react";
import { ThemeProvider } from "@mui/material/styles";

import { theme } from "../theme/them";
import Swipeabl from "./Swipeabl";
 import { Container } from "./Container";
import { HandelSave } from "../detailsCustomer/HandelSave";

const Taps: React.FC = () => {
 
 

  return (
    <ThemeProvider theme={theme}>
      <Container>
 
        <Swipeabl  />
      </Container>
    
    </ThemeProvider>
  );
};

export default Taps;
