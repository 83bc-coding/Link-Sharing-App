import { TabPanelProps } from "../../types/TabPanelProps";

export const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => (
    <>{value === index && children}</>
  );