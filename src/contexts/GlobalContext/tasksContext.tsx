import { createContext, ReactNode, useEffect, useState } from "react";
import { getAllItems, getMenuItems } from "../../utils/services";

type MenuItemsType = {
  id: number;
  name: string;
  subMenus: {
    id: number;
    name: string;
  }[];
};

type ItemsType = {
  id: number;
  subMenuItems: {
    id: string;
    name: string;
    subject: string;
    owner: string;
    users: string[];
  }[];
};

type TasksContextType = {
  currentMenuId: number;
  setMenuId(id: number): void;
  menuItems: MenuItemsType[];
  items: ItemsType[];

  archiveItems(): void;
  selectedTasks: string[];
  selectTask(taskId: string): void;
  selectAllTasks(): void;
};

type TasksContextProviderProps = {
  children: ReactNode;
};

export const TasksContext = createContext({} as TasksContextType);

const TasksContextProvider = ({ children }: TasksContextProviderProps) => {
  const [currentMenuId, setCurrentMenuId] = useState(0);
  const [menuItems, setMenuItems] = useState<MenuItemsType[]>([]);
  const [items, setItems] = useState<ItemsType[]>([]);
  const [selectedTasks, setSelectedTasks] = useState<string[]>([]);

  const setMenuId = (id: number) => {
    setCurrentMenuId(id);
    setSelectedTasks([]);
  };

  const getData = async () => {
    const allMenuItems = await getMenuItems();
    setMenuItems(allMenuItems);

    const allItems = await getAllItems();
    setItems(allItems);
  };

  const selectAllTasks = () => {
    const currentMenuTasks = items.filter((it) => it.id === currentMenuId)[0];
    const taskIds = currentMenuTasks
      ? currentMenuTasks.subMenuItems.map((item) => item.id)
      : [];

    if (JSON.stringify(taskIds) === JSON.stringify(selectedTasks)) {
      setSelectedTasks([]);
    } else {
      setSelectedTasks(taskIds);
    }
  };

  const selectTask = (taskId: string) => {
    const tempSelectedTasks = [...selectedTasks];

    if (selectedTasks.includes(taskId)) {
      tempSelectedTasks.splice(selectedTasks.indexOf(taskId), 1);
      setSelectedTasks(tempSelectedTasks);
    } else {
      tempSelectedTasks.push(taskId);
      setSelectedTasks(tempSelectedTasks);
    }
  };

  const archiveItems = () => {
    const filteredItems = items.map((item) => {
      let subMenuItems = item.subMenuItems;
      selectedTasks.forEach((taskId) => {
        subMenuItems = subMenuItems.filter((task) => task.id !== taskId);
      });

      return {
        id: item.id,
        subMenuItems,
      };
    });

    setItems(filteredItems);
    setSelectedTasks([]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <TasksContext.Provider
      value={{
        currentMenuId,
        setMenuId,
        menuItems,
        items,
        archiveItems,
        selectedTasks,
        selectTask,
        selectAllTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksContextProvider;
