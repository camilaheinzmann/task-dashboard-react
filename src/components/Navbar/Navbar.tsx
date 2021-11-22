import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../contexts/GlobalContext/authContext";
import { UIContext } from "../../contexts/GlobalContext/uiContext";

import {
  Container,
  Menu,
  List,
  Wrapper,
  ListItem,
  SettingsButton,
  SettingsPopup,
  SettingsPopupItem,
  LogoutButton,
} from "./Navbar.style";

import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";

const Navbar = () => {
  const { logout } = useContext(AuthContext);
  const { toggleMenu, userLanguage } = useContext(UIContext);
  const { navbarComponent } = userLanguage.dashboardPage;

  const modalRef = useRef(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleLogout = () => {
    logout();
  };

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

  return (
    <Wrapper ref={modalRef}>
      <Container>
        <Menu onClick={toggleMenu}>
          <MenuIcon />
        </Menu>
        <List>
          <ListItem>{navbarComponent.help}</ListItem>
          <ListItem>
            <SettingsButton
              type="button"
              data-testid="settings-button"
              onClick={() => setIsPopupVisible(!isPopupVisible)}
            >
              {navbarComponent.settings}
            </SettingsButton>
            {isPopupVisible && (
              <SettingsPopup ref={modalRef}>
                <SettingsPopupItem>
                  <LogoutButton
                    data-testid="logout-button"
                    onClick={handleLogout}
                  >
                    {navbarComponent.logout}
                  </LogoutButton>
                </SettingsPopupItem>
              </SettingsPopup>
            )}
          </ListItem>
        </List>
      </Container>
    </Wrapper>
  );
};

export default Navbar;
