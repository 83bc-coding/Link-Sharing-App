import React, { createContext, useState, ReactNode } from "react";
import { CardType } from "../types/CardType";

export interface CardContextValue {
  cards: CardType[];
  addCard: (card: CardType) => void;
  deleteCard: (index: number) => void;
  updateCard: (index: number, updatedCard: CardType) => void;
}

export const CardContext = createContext<CardContextValue | undefined>(
  undefined
);

interface CardProviderProps {
  children: ReactNode;
}

export const CardProvider: React.FC<CardProviderProps> = ({ children }) => {
  const [cards, setCards] = useState<CardType[]>([]);

  const addCard = (card: CardType) => {
    setCards([...cards, card]);
  };

  const deleteCard = (index: number) => {
    const updatedCards = [...cards];
    updatedCards.splice(index, 1);
    setCards(updatedCards);
  };

  const updateCard = (index: number, updatedCard: CardType) => {
    const updatedCards = [...cards];
    updatedCards[index] = updatedCard;
    setCards(updatedCards);
  };
 
  return (
    <CardContext.Provider value={{ cards, addCard, deleteCard, updateCard }}>
      {children}
    </CardContext.Provider>
  );
};
