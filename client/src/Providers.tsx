import { ReactNode } from "react";
import { UserProvider } from "./Context/userContext";
import { CardProvider } from "./Context/LinksContext";
type prop = {
  children?: ReactNode;
};
const Providers = ({children}: prop) => {
  return (
    <CardProvider>
      <UserProvider>{children}</UserProvider>
    </CardProvider>
  );
};

export default Providers;
