import { useContext } from "react";
import { UIContext } from "../../contexts/GlobalContext/uiContext";

import { Toggle } from "./ToggleTheme.style";

const ToggleTheme = () => {
  const { toggleTheme } = useContext(UIContext);

  return (
    <Toggle data-testid="toggle-button" type="button" onClick={toggleTheme} />
  );
};

export default ToggleTheme;
