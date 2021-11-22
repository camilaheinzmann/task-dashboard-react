import { ReactNode } from "react";

import AuthContextProvider from "./authContext";
import TasksContextProvider from "./tasksContext";
import UIContextProvider from "./uiContext";

type GlobalContextType = {
  children: ReactNode;
};

const GlobalContext = ({ children }: GlobalContextType) => (
  <AuthContextProvider>
    <UIContextProvider>
      <TasksContextProvider>{children}</TasksContextProvider>
    </UIContextProvider>
  </AuthContextProvider>
);

export default GlobalContext;
