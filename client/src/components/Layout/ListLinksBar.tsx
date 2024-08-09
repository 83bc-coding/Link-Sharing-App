import { useContext } from "react";
import LinkBar from "./LinkBar";
import { CardContext, CardContextValue } from "../../Context/LinksContext";

const ListLinksBar = () => {
  const { cards } = useContext(CardContext) as CardContextValue;

  console.log("layout", cards);
  return (
    <>
      {cards.map((card, index) => (
        <LinkBar card={card} key={index} />
      ))}
    </>
  );
};

export default ListLinksBar;
