import { render, fireEvent, screen } from "@testing-library/react";
import GlobalContext from "../../contexts/GlobalContext";
import { TasksContext } from "../../contexts/GlobalContext/tasksContext";
import Aside from "./Aside";
import {
  authContextValue,
  taskMockValue,
  uiContextValue,
  uiContextValueAsideNotVisible,
} from "../../utils/mocks/mockTests";
import { AuthContext } from "../../contexts/GlobalContext/authContext";
import { UIContext } from "../../contexts/GlobalContext/uiContext";

describe("Aside component", () => {
  it("should render correctly", () => {
    const { container } = render(
      <GlobalContext>
        <UIContext.Provider value={uiContextValue}>
          <Aside />
        </UIContext.Provider>
      </GlobalContext>
    );

    expect(container).toBeInTheDocument();
    expect(screen.getByTestId("aside-wrapper")).toHaveStyle(`width: 30%;`);
  });

  it("should render correctly but not visible", () => {
    render(
      <GlobalContext>
        <UIContext.Provider value={uiContextValueAsideNotVisible}>
          <Aside />
        </UIContext.Provider>
      </GlobalContext>
    );

    expect(screen.getByTestId("aside-wrapper")).toHaveStyle(`width: 0;`);
  });

  it("should open and select options on new button", () => {
    render(
      <GlobalContext>
        <Aside />
      </GlobalContext>
    );

    fireEvent.click(screen.getByTestId("open-tasks"));
    fireEvent.click(screen.getByTestId("modal-ref"));

    fireEvent.click(screen.getByTestId("open-tasks"));
    fireEvent.click(screen.getByTestId("option-1"));

    fireEvent.click(screen.getByTestId("open-tasks"));
    fireEvent.click(screen.getByTestId("option-2"));
  });

  it("should render menu options", () => {
    render(
      <GlobalContext>
        <TasksContext.Provider value={taskMockValue}>
          <Aside />
        </TasksContext.Provider>
      </GlobalContext>
    );

    expect(screen.getByText("Tarefa 1")).toBeInTheDocument();
  });

  it("should be possible to click through the menus and submenus", () => {
    render(
      <GlobalContext>
        <AuthContext.Provider value={authContextValue}>
          <TasksContext.Provider value={taskMockValue}>
            <Aside />
          </TasksContext.Provider>
        </AuthContext.Provider>
      </GlobalContext>
    );

    fireEvent.click(screen.getByTestId("detail-task-button-1"));
    fireEvent.click(screen.getByTestId("submenu-button-11"));
  });
});
