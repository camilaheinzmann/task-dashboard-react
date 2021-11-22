import { render, fireEvent, screen } from "@testing-library/react";
import GlobalContext from "../../contexts/GlobalContext";
import ToggleTheme from "./ToggleTheme";

describe("ToggleTheme component", () => {
  it("should render correctly", () => {
    const { container } = render(
      <GlobalContext>
        <ToggleTheme />
      </GlobalContext>
    );
    fireEvent.click(screen.getByTestId("toggle-button"));

    expect(container).toBeInTheDocument();
  });
});
