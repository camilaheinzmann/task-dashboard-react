import { render, fireEvent, screen } from "@testing-library/react";
import GlobalContext from "../../contexts/GlobalContext";
import Navbar from "./Navbar";

describe("Navbar component", () => {
  it("should render correctly", () => {
    const { container } = render(
      <GlobalContext>
        <Navbar />
      </GlobalContext>
    );
    expect(container).toBeInTheDocument();
  });

  it("should logout correctly", () => {
    const { container } = render(
      <GlobalContext>
        <Navbar />
      </GlobalContext>
    );

    fireEvent.click(screen.getByTestId("settings-button"));
    fireEvent.click(screen.getByTestId("logout-button"));
    expect(container).toBeInTheDocument();
  });
});
