import { useContext, useState, useEffect } from "react";
import LinkCard from "./LinkCard";
import AddLinks from "./AddLinks";
import { CardContext, CardContextValue } from "../../../Context/LinksContext";
    
const ListLinks = () => {
  const { cards, deleteCard, updateCard, addCard } = useContext(
    CardContext
  ) as CardContextValue;
  const [disabled, setDisabled] = useState(false);

  const handleDisabledState = () => {
    if (cards.length > 4) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  useEffect(() => {
    handleDisabledState();
  }, [cards]);

  return (
    <>
      <AddLinks disabled={disabled} addCard={addCard} />
      {cards.map((card, index) => (
        <LinkCard
          key={card.id}
          index={index}
          card={card}
          onDelete={deleteCard}
          updateCard={updateCard}
        />
      ))}
  
    </>
  );
};

export default ListLinks;
