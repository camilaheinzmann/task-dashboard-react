import styled from "styled-components";

export const Toggle = styled.button`
  width: 48px;
  height: 24px;
  padding: 3px;

  display: flex;
  justify-content: ${({ theme }) =>
    theme.title === "light" ? "flex-start" : "flex-end"};
  align-items: center;

  background-color: ${({ theme }) => theme.colors.foreground};
  border: ${({ theme }) => `1px solid ${theme.colors.separator}`};
  border-radius: 99px;
  cursor: pointer;

  &:after {
    content: "";
    height: 18px;
    width: 18px;

    background-color: ${({ theme }) => theme.colors.primary}!important;
    border-radius: 50%;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(1.1);
    }
  }
`;
