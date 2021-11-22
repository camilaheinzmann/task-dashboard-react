import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../contexts/GlobalContext/authContext";
import { TasksContext } from "../../contexts/GlobalContext/tasksContext";
import { UIContext } from "../../contexts/GlobalContext/uiContext";

import {
  Container,
  Detail,
  Favorites,
  Footer,
  Header,
  ItemsContainer,
  Menu,
  NewTask,
  NewTaskPopup,
  NewTaskPopupItem,
  Number,
  Option,
  Status,
  SubMenu,
  SubMenuContainer,
  TaskList,
  UserAvatar,
  Wrapper,
} from "./Aside.style";
import Avatar from "../Avatar";
import ToggleTheme from "../ToggleTheme";
import LanguageSelector from "../LanguageSelector";

import { ReactComponent as ChevronIcon } from "../../assets/icons/chevron.svg";

const Aside = () => {
  const { user } = useContext(AuthContext);
  const { setMenuId, menuItems, items } = useContext(TasksContext);
  const { menuVisible, userLanguage } = useContext(UIContext);

  const { newAction, favorites, task, subTask } =
    userLanguage.dashboardPage.asideComponent;

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [userInitial, setUserInitial] = useState("");

  const modalRef = useRef(null);

  const handleOutsideClick = useCallback(() => {
    if (isPopupVisible && modalRef.current) {
      setIsPopupVisible(false);
    }
  }, [isPopupVisible]);

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [handleOutsideClick]);

  useEffect(() => {
    if (user) setUserInitial(user.firstName[0] + user.lastName[0]);
    else setUserInitial("MM");
  }, [user]);

  return (
    <Wrapper visible={menuVisible} data-testid="aside-wrapper">
      <Container>
        <Header>
          <UserAvatar>
            <Avatar size="md">{userInitial}</Avatar>
            <Status />
          </UserAvatar>
          <NewTask
            data-testid="open-tasks"
            onClick={() => setIsPopupVisible(!isPopupVisible)}
          >
            {newAction}
            <Option />
          </NewTask>
          {isPopupVisible && (
            <NewTaskPopup data-testid="modal-ref" ref={modalRef}>
              <NewTaskPopupItem
                data-testid="option-1"
                onClick={() => setIsPopupVisible(!isPopupVisible)}
              >
                {task}
              </NewTaskPopupItem>
              <NewTaskPopupItem
                data-testid="option-2"
                onClick={() => setIsPopupVisible(!isPopupVisible)}
              >
                {subTask}
              </NewTaskPopupItem>
            </NewTaskPopup>
          )}
        </Header>
        <TaskList>
          <Favorites>
            {favorites}
            <Number>{30}</Number>
          </Favorites>
          <ItemsContainer>
            {menuItems.length > 0 &&
              menuItems.map(
                (menu, index) =>
                  menu.subMenus.length > 0 && (
                    <Detail
                      key={menu.id}
                      open={index === 0}
                      data-testid={`detail-task-button-${menu.id}`}
                    >
                      <Menu>
                        <ChevronIcon />
                        {menu.name}
                      </Menu>
                      <SubMenuContainer>
                        {menu.subMenus.map((subMenu) => (
                          <SubMenu
                            key={subMenu.id}
                            data-testid={`submenu-button-${subMenu.id}`}
                            onClick={() => setMenuId(subMenu.id)}
                          >
                            {subMenu.name}
                            <Number>
                              {items
                                .filter((item) => item.id === subMenu.id)
                                .map((itemss) => itemss.subMenuItems.length)}
                            </Number>
                          </SubMenu>
                        ))}
                      </SubMenuContainer>
                    </Detail>
                  )
              )}
          </ItemsContainer>
        </TaskList>
      </Container>
      <Footer>
        <ToggleTheme />
        <LanguageSelector />
      </Footer>
    </Wrapper>
  );
};

export default Aside;
