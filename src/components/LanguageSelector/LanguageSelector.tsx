import { useContext } from "react";
import { UIContext } from "../../contexts/GlobalContext/uiContext";

import { LanguageOption, SelectorContainer } from "./LanguageSelector.style";

const LanguageSelector = () => {
  const { userLanguage, changeLanguage } = useContext(UIContext);

  return (
    <SelectorContainer
      value={userLanguage.abbr}
      data-testid="language-selector"
      onChange={(e) => changeLanguage(e.target.value)}
    >
      <LanguageOption data-testid="option-pt" value="pt-br">
        PT-BR
      </LanguageOption>
      <LanguageOption data-testid="option-en" value="en-us">
        EN-US
      </LanguageOption>
      <LanguageOption data-testid="option-es" value="es-es">
        ES-ES
      </LanguageOption>
    </SelectorContainer>
  );
};

export default LanguageSelector;
