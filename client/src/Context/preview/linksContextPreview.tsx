import React, { createContext, useState, ReactNode } from "react";
import { CardType } from "../../types/CardType";

export interface CardContextValuePreview {
  links: CardType[];
  addLinks: (newCards: CardType[]) => void;
}

export const CardContextPreview = createContext<
  CardContextValuePreview | undefined
>(undefined);

interface CardProviderProps {
  children: ReactNode;
}

export const LinksProvider: React.FC<CardProviderProps> = ({ children }) => {
  const [links, setLinks] = useState<CardType[]>([]);

  const addLinks = (newCards: CardType[]) => {
    setLinks(newCards);
  };

  return (
    <CardContextPreview.Provider value={{ links, addLinks }}>
      {children}
    </CardContextPreview.Provider>
  );
};
