import { Container } from "./Container";
import Title from "../../../ui/Title";

import ListLinks from "./ListLinks";
import { useContext, useEffect } from "react";
import { getLinks } from "../../qurey/getLinks";
import { UserContext, UserContextValue } from "../../../Context/userContext";
import ButtonUi from "../../../ui/ButtonUi";
import { CardContext, CardContextValue } from "../../../Context/LinksContext";
import { HandelSave } from "../HandelSave";

const Links = () => {
  const { user } = useContext(UserContext) as UserContextValue;
  const { addCardServer } = useContext(CardContext) as CardContextValue;

 
    console.log("im links");
    const handale = async () => {
      const  links  = await getLinks(user?._id);
      // for (const link of links) {
      //   console.log("im test for getlinks in links ", link);
      //   addCard(link);
      // }
      addCardServer(links)
      console.log("im test getlinks in links ", links);
    };
    // handale();
  
  return (
    <>
      <Container>
        <Title
          title="Customize your links"
          description="Add/edit/remove links below and then share all your profiles with the world!"
        />
        <ListLinks />    
        <HandelSave/>
      </Container>
  
    </>
  );
};

export default Links;
