import   { useContext } from "react";
import NavBar from "./components/navBar/navBar";
import DetailsCustomer from "./components/detailsCustomer/DetailsCustomer";
 import { UserContext, UserContextValue } from "./Context/userContext";

const Home = () => {
  const { user } = useContext(UserContext) as UserContextValue;

  return (
    <>
      <NavBar />
      <DetailsCustomer />
     
    </>
  );
};

export default Home;
