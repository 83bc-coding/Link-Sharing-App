 import { AppBar, Tabs, Tab } from "@mui/material";
type propr={
  value:any;
  onChange:any;

}
const AppBarComponent = ({value,onChange}:propr) => {
  const a11yProps = (index: number) => ({
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  });
  return (
    <AppBar position="static" color="default">
    <Tabs
      value={value}
      onChange={onChange}
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
  )
}

export default AppBarComponent