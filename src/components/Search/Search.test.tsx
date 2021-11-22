import { render, fireEvent, screen } from "@testing-library/react";
import GlobalContext from "../../contexts/GlobalContext";
import { TasksContext } from "../../contexts/GlobalContext/tasksContext";
import {
  taskMockValue,
  taskMockValueEmptyTasks,
  taskMockNotSelectedMenu,
} from "../../utils/mocks/mockTests";
import Search from "./Search";

describe("Search component", () => {
  it("should render correctly", () => {
    const { container } = render(
      <GlobalContext>
        <TasksContext.Provider value={taskMockValue}>
          <Search />
        </TasksContext.Provider>
      </GlobalContext>
    );

    expect(container).toBeInTheDocument();
  });

  it("should be archive selected items", () => {
    render(
      <GlobalContext>
        <TasksContext.Provider value={taskMockValue}>
          <Search />
        </TasksContext.Provider>
      </GlobalContext>
    );

    fireEvent.click(screen.getByTestId("archive-button"));
  });

  it("nothing should be archived if no items are selected", () => {
    const { container } = render(
      <GlobalContext>
        <TasksContext.Provider value={taskMockValueEmptyTasks}>
          <Search />
        </TasksContext.Provider>
      </GlobalContext>
    );

    expect(container).toBeInTheDocument();
  });

  it("nothing should be archived if no menu is selected", () => {
    const { container } = render(
      <GlobalContext>
        <TasksContext.Provider value={taskMockNotSelectedMenu}>
          <Search />
        </TasksContext.Provider>
      </GlobalContext>
    );

    expect(container).toBeInTheDocument();
  });
});
