import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: center;

  ${({ theme }) =>
    theme &&
    css`
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.buttonText};
    `}
`;

export const Container = styled.div`
  width: 100%;

  padding: 0 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    border: 0;
    cursor: pointer;
  }
`;

export const Menu = styled.button`
  color: ${({ theme }) => theme.colors.buttonText};
  background: none;

  svg {
    width: 26px;
    height: 26px;
  }
`;

export const List = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ListItem = styled.ul`
  position: relative;
  height: 100%;

  display: flex;
  align-items: center;
  cursor: default;

  &:not(:last-child) {
    margin-right: 25px;
  }
`;

export const SettingsButton = styled.button`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.buttonText};
  background: 0;
`;

export const SettingsPopup = styled.div`
  width: min-content;
  min-width: 200px;

  padding: 7px 0;

  position: absolute;
  right: 0;
  top: calc(100% - 1px);

  display: flex;
  flex-direction: column;

  ${({ theme }) =>
    theme &&
    css`
      background-color: ${theme.colors.foreground};
      color: ${theme.colors.text};
    `}

  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

export const SettingsPopupItem = styled.div`
  width: 100%;

  font-size: 15px;

  color: ${({ theme }) => theme.colors.text};
  transition: 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:last-child:hover {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

export const LogoutButton = styled.button`
  padding: 8px 15px;
  width: 100%;
  height: 100%;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text};
  text-align: start;
  background: 0;
`;
