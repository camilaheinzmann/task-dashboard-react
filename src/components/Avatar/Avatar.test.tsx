import { render, screen } from "@testing-library/react";
import GlobalContext from "../../contexts/GlobalContext";
import Avatar from "./Avatar";

describe("Avatar component", () => {
  it("should render correctly", () => {
    const { container } = render(
      <GlobalContext>
        <Avatar size="md">CH</Avatar>
      </GlobalContext>
    );

    expect(container).toBeInTheDocument();
  });

  it("should support larger sizes if given as md parameter", () => {
    render(
      <GlobalContext>
        <Avatar size="md">CH</Avatar>
      </GlobalContext>
    );

    expect(screen.getByTestId("avatar")).toHaveStyle(
      `font-size: 23px; width: 50px; height: 50px;`
    );
  });

  it("should support smaller sizes if given as sm parameter", () => {
    render(
      <GlobalContext>
        <Avatar size="sm">CH</Avatar>
      </GlobalContext>
    );

    expect(screen.getByTestId("avatar")).toHaveStyle(
      `font-size: 14px; width: 30px; height: 30px;`
    );
  });
});
