import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../../contexts/GlobalContext/authContext";
import { UIContext } from "../../contexts/GlobalContext/uiContext";

import {
  Button,
  Container,
  Form,
  Input,
  Label,
  SettingsContainer,
  Title,
  Wrapper,
} from "./Auth.styles";
import ToggleTheme from "../../components/ToggleTheme";
import LanguageSelector from "../../components/LanguageSelector/LanguageSelector";

type UserAuthType = {
  username: string;
  password: string;
};

const Auth = () => {
  const { login } = useContext(AuthContext);
  const { userLanguage } = useContext(UIContext);

  const { authPage } = userLanguage;

  const [user, setUser] = useState<UserAuthType>({
    username: "",
    password: "",
  });

  const handleSignIn = (e: FormEvent) => {
    e.preventDefault();

    const response = login({
      username: user.username,
      password: user.password,
    });

    if (response === "error") {
      setUser({ ...user, password: "" });
    }
  };

  return (
    <Wrapper>
      <Container>
        <Form onSubmit={handleSignIn} data-testid="login-form">
          <Title>{authPage.loginTitle}</Title>
          <Label>{authPage.username}</Label>
          <Input
            data-testid="username-input"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            type="text"
          />
          <Label>{authPage.password}</Label>
          <Input
            data-testid="password-input"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <Button type="submit" data-testid="signin-button">
            {authPage.enterButton}
          </Button>
        </Form>
        <SettingsContainer>
          <ToggleTheme />
          <LanguageSelector />
        </SettingsContainer>
      </Container>
    </Wrapper>
  );
};

export default Auth;
