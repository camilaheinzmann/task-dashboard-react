import { useContext, useEffect, useState } from "react";
import { TasksContext } from "../../contexts/GlobalContext/tasksContext";
import { UIContext } from "../../contexts/GlobalContext/uiContext";

import {
  AvatarCheckContainer,
  CheckBoxContainer,
  CheckBox,
  DataItem,
  DataUserContainer,
  Date,
  Item,
  Name,
  Subject,
  SubMenuItems,
  TaskId,
  UsersContainer,
  Wrapper,
} from "./Tasks.style";
import Avatar from "../Avatar";

import { ReactComponent as SendIcon } from "../../assets/icons/send.svg";

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

const Tasks = () => {
  const { items, menuItems, currentMenuId, selectedTasks, selectTask } =
    useContext(TasksContext);
  const { userLanguage } = useContext(UIContext);

  const { tasksComponent } = userLanguage.dashboardPage;

  const [visibleItems, setVisibleItems] = useState<ItemsType>();
  const [isCheckboxVisible, setIsCheckboxVisible] = useState(false);

  useEffect(() => {
    const allItems = items.filter((item) => item.id === currentMenuId);
    setVisibleItems(allItems[0]);
  }, [items, menuItems, currentMenuId]);

  useEffect(() => {
    if (selectedTasks.length > 0) {
      setIsCheckboxVisible(true);
    } else {
      setIsCheckboxVisible(false);
    }
  }, [selectedTasks]);

  return (
    <Wrapper>
      <SubMenuItems>
        {visibleItems &&
          visibleItems.subMenuItems.map((subMenu) => (
            <Item key={subMenu.id}>
              <AvatarCheckContainer
                data-testid={`avatar-container-${subMenu.id}`}
                onMouseEnter={() => setIsCheckboxVisible(true)}
                onMouseLeave={() =>
                  selectedTasks.length === 0 && setIsCheckboxVisible(false)
                }
              >
                <Avatar size="md">{subMenu.owner}</Avatar>
                <CheckBoxContainer
                  visible={isCheckboxVisible}
                  data-testid={`checkbox-container-${subMenu.id}`}
                >
                  <CheckBox
                    type="checkbox"
                    data-testid={`checkbox-avatar-${subMenu.id}`}
                    checked={selectedTasks.includes(subMenu.id)}
                    onChange={() => selectTask(subMenu.id)}
                  />
                </CheckBoxContainer>
              </AvatarCheckContainer>
              <DataItem>
                <Name>{subMenu.name}</Name>
                <Subject>{subMenu.subject}</Subject>
                <TaskId>
                  <SendIcon /> {tasksComponent.task}{" "}
                  {currentMenuId.toString()[0]}
                </TaskId>
              </DataItem>
              <DataUserContainer>
                <Date> 20/11/2021</Date>
                <UsersContainer>
                  {subMenu.users.map((user) => (
                    <Avatar size="sm" key={`${subMenu.id}-${user}`}>
                      {user}
                    </Avatar>
                  ))}
                </UsersContainer>
              </DataUserContainer>
            </Item>
          ))}
      </SubMenuItems>
    </Wrapper>
  );
};

export default Tasks;
