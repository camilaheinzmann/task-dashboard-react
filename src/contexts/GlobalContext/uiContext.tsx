import { createContext, ReactNode, useEffect, useState } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";

import { light, dark } from "../../styles/themes";

import usePersistedTheme from "../../utils/hooks/usePersistedTheme";
import { PT, EN, ES } from "../../utils/languages";

type UserLanguageType = {
  language: string;
  abbr: string;
  authPage: {
    loginTitle: string;
    username: string;
    password: string;
    enterButton: string;
  };
  dashboardPage: {
    navbarComponent: {
      help: string;
      settings: string;
      logout: string;
    };
    asideComponent: {
      newAction: string;
      favorites: string;
      task: string;
      subTask: string;
    };
    searchComponent: {
      search: string;
      assign: string;
      archive: string;
      schedule: string;
    };
    tasksComponent: {
      task: string;
    };
  };
};

type UIContextType = {
  theme: DefaultTheme;
  toggleTheme(): void;
  menuVisible: boolean;
  toggleMenu(): void;
  userLanguage: UserLanguageType;
  changeLanguage(lang: string): void;
};

type UIContextProviderProps = {
  children: ReactNode;
};

export const UIContext = createContext({} as UIContextType);

const UIContextProvider = ({ children }: UIContextProviderProps) => {
  const [theme, setTheme] = usePersistedTheme<DefaultTheme>("_theme", dark);
  const [menuVisible, setMenuVisible] = useState(true);
  const [userLanguage, setUserLanguage] = useState<UserLanguageType>(PT);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const changeLanguage = (lang: string) => {
    switch (lang) {
      case "pt-br":
        setUserLanguage(PT);
        break;
      case "en-us":
        setUserLanguage(EN);
        break;
      case "es-es":
        setUserLanguage(ES);
        break;
      default:
        setUserLanguage(PT);
        break;
    }
    localStorage.setItem("_lang", JSON.stringify(lang));
  };

  useEffect(() => {
    const langState = localStorage.getItem("_lang");
    if (langState) {
      changeLanguage(JSON.parse(langState));
    } else {
      localStorage.setItem("_lang", JSON.stringify("pt-br"));
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = userLanguage.abbr;
  }, [userLanguage]);

  return (
    <UIContext.Provider
      value={{
        theme,
        toggleTheme,
        menuVisible,
        toggleMenu,
        userLanguage,
        changeLanguage,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </UIContext.Provider>
  );
};

export default UIContextProvider;
