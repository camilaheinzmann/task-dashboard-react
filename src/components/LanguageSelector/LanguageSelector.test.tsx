import { render, screen, fireEvent } from "@testing-library/react";
import GlobalContext from "../../contexts/GlobalContext";
import LanguageSelector from "./LanguageSelector";

describe("LanguageSelector component", () => {
  it("should render correctly", () => {
    const { container } = render(
      <GlobalContext>
        <LanguageSelector />
      </GlobalContext>
    );
    fireEvent.change(screen.getByTestId("language-selector"));
    fireEvent.click(screen.getByTestId("option-pt"));
    fireEvent.change(screen.getByTestId("language-selector"));
    fireEvent.click(screen.getByTestId("option-en"));
    fireEvent.change(screen.getByTestId("language-selector"));
    fireEvent.click(screen.getByTestId("option-es"));
    expect(container).toBeInTheDocument();
  });
});
