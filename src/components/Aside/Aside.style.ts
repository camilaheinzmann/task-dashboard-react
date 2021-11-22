import styled from "styled-components";

type AsideWrapperType = {
  visible: boolean;
};

export const Wrapper = styled.aside<AsideWrapperType>`
  width: ${({ visible }) => (visible ? "30%" : 0)};
  height: calc(100vh - 60px);
  overflow: hidden;
  position: relative;

  transition: width 0.3s;

  border-right: ${({ theme }) => `2px solid ${theme.colors.separator}`};

  @media (max-width: 992px) {
    width: ${({ visible }) => (visible ? "40%" : 0)};
  }

  @media (max-width: 767px) {
    width: ${({ visible }) => (visible ? "100%" : 0)};

    position: fixed;
    background-color: ${({ theme }) => theme.colors.background};
    z-index: 2;
  }
`;

export const Container = styled.div`
  padding: 30px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 30px;
  border-bottom: ${({ theme }) => `2px solid ${theme.colors.separator}`};
`;

export const UserAvatar = styled.div`
  position: relative;
  height: min-content;
  width: min-content;
`;

export const Status = styled.div`
  position: absolute;

  bottom: 0;
  right: 0;

  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: green;
`;

export const NewTask = styled.button`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  border: 0;
  outline: 0;

  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  font-size: 16px;
`;

export const Option = styled.span`
  background: none;
  margin-left: 15px;
  width: 0;
  height: 0;

  border: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: ${({ theme }) => `5px solid ${theme.colors.primary}`};
`;

export const NewTaskPopup = styled.div`
  width: min-content;
  max-width: 180px;
  min-width: 120px;

  word-wrap: break-word;
  position: absolute;
  right: 30px;
  top: 70px;

  background-color: ${({ theme }) => theme.colors.foreground};
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

export const NewTaskPopupItem = styled.button`
  width: 100%;

  padding: 8px 15px;

  background: none;
  border: 0;

  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  text-align: start;
  font-size: 15px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

export const TaskList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Favorites = styled.p`
  padding: 20px 0px 10px 20px;

  font-size: 16px;
`;
export const Number = styled.span`
  position: absolute;
  right: 30px;
`;

export const ItemsContainer = styled.div`
  padding-left: 10px;

  display: flex;
  flex-direction: column;
`;

export const Detail = styled.details`
  margin: 10px 0;

  color: ${({ theme }) => theme.colors.text};

  svg {
    transition: 0.3s;
    margin-right: 30px;
  }

  &[open] {
    svg {
      transform: rotate(90deg);
    }
  }
`;

export const Menu = styled.summary`
  cursor: pointer;

  /* hides the summary tag marker in different browsers */
  list-style: none;
  list-style-type: none;
  display: block !important;

  &::marker {
    display: none;
    content: "";
    font-size: 0px;
  }

  &::-webkit-details-marker {
    display: none;
    font-size: 0px;
  }
`;

export const SubMenuContainer = styled.div`
  margin-top: 10px;

  display: flex;
  flex-direction: column;
`;

export const SubMenu = styled.button`
  margin-left: 75px;
  padding: 10px 5px;

  color: ${({ theme }) => theme.colors.text};
  background: none;
  border: 0;
  text-align: left;
  font-size: 16px;

  word-wrap: break-word;
  cursor: pointer;
`;

export const Footer = styled.footer`
  width: 100%;
  height: 50px;

  padding: 13px 30px;
  position: absolute;
  bottom: 0;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
