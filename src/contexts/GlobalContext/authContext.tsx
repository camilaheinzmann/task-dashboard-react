import { createContext, ReactNode, useEffect, useState } from "react";

type UserType = {
  firstName: string;
  lastName: string;
};

type SignInType = {
  username: string;
  password: string;
};

type AuthContextType = {
  user: UserType | undefined;
  login({ username, password }: SignInType): string;
  logout(): void;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<UserType>();

  const login = ({ username, password }: SignInType) => {
    if (username === "user" && password === "123") {
      setUser({ firstName: "Camila", lastName: "Heinzmann" });
      localStorage.setItem("_isAuthenticated", JSON.stringify(true));
      return "success";
    }
    return "error";
  };

  const logout = () => {
    localStorage.setItem("_isAuthenticated", JSON.stringify(false));
    setUser(undefined);
  };

  useEffect(() => {
    const authState =
      localStorage.getItem("_isAuthenticated") === "true" ? true : false;

    if (authState) {
      setUser({ firstName: "Camila", lastName: "Heinzmann" });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
