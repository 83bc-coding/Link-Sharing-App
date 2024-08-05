import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ProfileDetails from "./Profile Details/profileDetails";
import Links from "./Links/Links";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return <>{children} </>;
}

function a11yProps(index: any) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}

function Taps() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "rgb(99 60 255 /0.7)",
      },
    },
  });
  const [value, setValue] = React.useState(0);

  const handleChange = (event: unknown, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: { md: "50%", sm: "100%" },
          backgroundColor: "white",
          minHeight: 200,
        }}
      >
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="action tabs example"
            sx={{ backgroundColor: "white" }}
          >
            <Tab label="Links" {...a11yProps(0)} />
            <Tab label="Profile Details" {...a11yProps(1)} />
          </Tabs>
        </AppBar>

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Links/>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <ProfileDetails />
          </TabPanel>
        </SwipeableViews>
      </Box>
    </ThemeProvider>
  );
}

export default Taps;
