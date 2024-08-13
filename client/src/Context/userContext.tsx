import { createContext, useState, ReactNode, useEffect } from "react";
import { UserType } from "../types/UserType";

export interface UserContextValue {
  user: UserType;
  addUser: (user: UserType) => void;
  deleteUser: () => void;
  updateFirstName: (text: string) => void;
  updateLastName: (text: string) => void;
}

export const UserContext = createContext<UserContextValue | undefined>(
  undefined
);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<UserType | undefined>(undefined);
  useEffect(() => {
    console.log("i user card", user);
  }, [user]);

  const addUser = (user: UserType) => {
    setUser(user);
    console.log("am add card", user);
  };

  const deleteUser = () => {
    setUser(undefined);
  };
  const updateFirstName = (text: string) => {
    setUser({ ...(user as UserType), firstName: text });
  };
  const updateLastName = (text: string) => {
    setUser({ ...(user as UserType), lastName: text });
  };

  return (
    <UserContext.Provider
      value={{
        user: user!,
        addUser,
        deleteUser,
        updateLastName,
        updateFirstName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
