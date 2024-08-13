import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import Links from "../detailsCustomer/Links/Links";
import ProfileDetails from "../detailsCustomer/Profile Details/profileDetails";
import { HandelSave } from "../detailsCustomer/HandelSave";

const Swipeabl = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
      >
        <Tab label="Links" />
        <Tab label="Profile Details" />
      </Tabs>
      <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
        {value === 0 &&  <><Links />   </>}
        {value === 1 && <ProfileDetails />}
      </Box>
    </Box>
  );
};

export default Swipeabl;
