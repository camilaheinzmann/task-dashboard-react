import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 30px 15px 30px;
`;

export const Input = styled.input`
  height: 45px;
  width: 100%;

  padding: 10px 20px;
  margin-bottom: 10px;
  font-size: 16px;

  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.foreground};
  border: ${({ theme }) => `1px solid ${theme.colors.separator}`};
  border-radius: 5px;
  outline: 0;

  datalist option {
    width: 100%;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px 0 0 5px;
`;

export const CheckBox = styled.input`
  transform: scale(1.5);

  opacity: 0.7;

  position: relative;

  filter: grayscale();

  @media (max-width: 767px) {
    margin-right: 7px;

    transform: scale(1.2);
  }
`;

export const ActionButton = styled.button`
  height: 35px;
  padding: 0 20px;
  margin-left: 20px;

  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.buttonText};
  border: 0;
  border-radius: 5px;
  font-weight: 500;
  font-size: 15px;

  cursor: pointer;
  transition: 0.3s;
  text-transform: uppercase;

  &:hover {
    filter: brightness(1.1);
  }

  @media (max-width: 767px) {
    padding: 0 10px;
    font-size: 13px;

    margin-left: 7px;
  }
`;

export const FilterButton = styled.button`
  padding: 5px;
  margin-left: auto;

  color: ${({ theme }) => theme.colors.text};
  border: 0;
  border-radius: 4px;
  background: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.separator};
  }
`;
