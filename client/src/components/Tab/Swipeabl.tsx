 import SwipeableViews from "react-swipeable-views";
import Links from "../detailsCustomer/Links/Links";

import { TabPanel } from "./TabPanel";
import ProfileDetails from "../detailsCustomer/Profile Details/profileDetails";
type propr = {
  value: any;
  theme: any;
  onChangeIndex: any;
};
const Swipeabl = ({ value, theme, onChangeIndex }: propr) => {
  return (
    <SwipeableViews
      axis={theme.direction === "rtl" ? "x-reverse" : "x"}
      index={value}
      onChangeIndex={onChangeIndex}
    >
      <TabPanel value={value} index={0}>
        <Links />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProfileDetails />
      </TabPanel>
    </SwipeableViews>
  );
};

export default Swipeabl;
