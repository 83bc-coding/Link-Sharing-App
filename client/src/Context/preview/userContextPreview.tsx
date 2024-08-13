import { createContext, useState, ReactNode, useEffect } from "react";
import { UserType } from "../../types/UserType";

export interface UserContextValuePreview {
  user: UserType;
  addUser: (user: UserType) => void;
}

export const UserContextPreview = createContext<
  UserContextValuePreview | undefined
>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProviderPreview = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<UserType | undefined>(undefined);
  useEffect(() => {
    console.log("i user card", user);
  }, [user]);

  const addUser = (user: UserType) => {
    setUser(user);
    console.log("am add card", user);
  };

  return (
    <UserContextPreview.Provider value={{ user: user!, addUser }}>
      {children}
    </UserContextPreview.Provider>
  );
};
