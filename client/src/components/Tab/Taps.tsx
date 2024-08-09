import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
 
import { theme } from "../theme/them";
import Swipeabl from "./Swipeabl";
import AppBarComponent from "./AppBarComponent";
import { Container } from "./Container";

const Taps: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: unknown, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <AppBarComponent value={value} onChange={handleChange} />

        <Swipeabl
          theme={theme}
          value={value}
          onChangeIndex={handleChangeIndex}
        />
      </Container>
    </ThemeProvider>
  );
};

export default Taps;
