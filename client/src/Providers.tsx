import { ReactNode } from "react";
import { UserProvider } from "./Context/userContext";
import { CardProvider } from "./Context/LinksContext";
import { LinksProvider } from "./Context/preview/linksContextPreview";
import { UserProviderPreview } from "./Context/preview/userContextPreview";
type prop = {
  children?: ReactNode;
};
const Providers = ({ children }: prop) => {
  return (
    <CardProvider>
      <UserProvider>
        <LinksProvider>
          <UserProviderPreview>{children}</UserProviderPreview>
        </LinksProvider>
      </UserProvider>
    </CardProvider>
  );
};

export default Providers;
