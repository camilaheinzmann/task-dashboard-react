import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1170px;
  min-height: 600px;

  padding: 80px 15px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 350px;
  margin-bottom: 20px;

  position: relative;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  padding-bottom: 20px;
  margin-bottom: 20px;

  text-align: center;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.text};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.separator}`};
`;

export const Label = styled.label`
  margin-bottom: 5px;

  font-weight: 500;
`;

export const Input = styled.input`
  height: 40px;

  padding: 10px;
  margin-bottom: 10px;

  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.foreground};
  border: ${({ theme }) => `1px solid ${theme.colors.separator}`};
  border-radius: 5px;
  outline: 0;
`;

export const Button = styled.button`
  height: 40px;

  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.buttonText};
  border: 0;
  border-radius: 5px;
  font-weight: 500;
  font-size: 15px;

  cursor: pointer;
  transition: 0.3s;

  &:hover {
    filter: brightness(1.1);
  }
`;

export const SettingsContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;

  display: flex;
  gap: 10px;
`;
