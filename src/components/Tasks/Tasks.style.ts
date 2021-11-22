import styled, { css } from "styled-components";

type CheckBoxContainerType = {
  visible: boolean;
};

export const Wrapper = styled.div`
  width: 100%;
`;

export const SubMenuItems = styled.ul`
  overflow-y: auto;
  height: calc(100vh - 220px);
`;

export const Item = styled.li`
  padding: 10px;

  ${({ theme }) =>
    theme &&
    css`
      background-color: ${theme.colors.foreground};
      border-bottom: ${`1px solid ${theme.colors.separator}`};
    `}

  display: flex;
  align-items: center;
`;

export const AvatarCheckContainer = styled.div`
  width: min-content;
  height: min-content;
  border-radius: 50%;

  position: relative;
`;

export const CheckBoxContainer = styled.div<CheckBoxContainerType>`
  width: 52px;
  height: 52px;

  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.3s;

  ${({ visible, theme }) =>
    theme &&
    css`
      background-color: ${theme.colors.background};
      opacity: ${visible ? 1 : 0};
    `}

  @media (max-width: 767px) {
    width: 42px;
    height: 42px;
  }
`;

export const CheckBox = styled.input`
  transform: scale(1.5);
  opacity: 0.6;

  position: relative;

  filter: grayscale();

  @media (max-width: 767px) {
    transform: scale(1.2);
  }
`;

export const DataItem = styled.div`
  flex: 1;
  padding: 0 15px;
`;

export const Name = styled.h4`
  height: 18px;
  overflow: hidden;

  @media (max-width: 767px) {
    font-size: 15px;
  }
`;

export const Subject = styled.p`
  font-size: 15px;
  height: 18px;
  margin: 5px 0;
  overflow: hidden;
`;

export const TaskId = styled.span`
  font-size: 15px;

  svg {
    width: 12px;
    height: 12px;
    margin-right: 5px;
    fill: ${({ theme }) => theme.colors.text};
  }
`;

export const DataUserContainer = styled.div`
  height: 100%;
`;

export const Date = styled.div`
  margin-bottom: 10px;

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const UsersContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;

  > div {
    margin-left: -10px;
  }
`;
