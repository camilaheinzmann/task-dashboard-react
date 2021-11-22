import { render, fireEvent, screen } from "@testing-library/react";
import GlobalContext from "../../contexts/GlobalContext";
import { TasksContext } from "../../contexts/GlobalContext/tasksContext";
import {
  taskMockValue,
  taskMockValueEmptySelectedTasks,
  taskMockValueEmptyTasks,
} from "../../utils/mocks/mockTests";
import Tasks from "./Tasks";

describe("Tasks component", () => {
  it("should render correctly with all items selected", () => {
    const { container } = render(
      <GlobalContext>
        <TasksContext.Provider value={taskMockValue}>
          <Tasks />
        </TasksContext.Provider>
      </GlobalContext>
    );
    expect(screen.getByTestId("checkbox-container-1")).toHaveStyle(
      `opacity: 1;`
    );

    expect(container).toBeInTheDocument();
  });

  it("should render correctly with no items selected", () => {
    const { container } = render(
      <GlobalContext>
        <TasksContext.Provider value={taskMockValueEmptySelectedTasks}>
          <Tasks />
        </TasksContext.Provider>
      </GlobalContext>
    );

    fireEvent.mouseEnter(screen.getByTestId("avatar-container-1"));
    expect(screen.getByTestId("checkbox-container-1")).toHaveStyle(
      `opacity: 1;`
    );
    fireEvent.mouseLeave(screen.getByTestId("avatar-container-1"));
    expect(screen.getByTestId("checkbox-container-1")).toHaveStyle(
      `opacity: 0;`
    );

    fireEvent.click(screen.getByTestId("checkbox-avatar-1"));

    expect(container).toBeInTheDocument();
  });

  it("should render correctly if there are no items", () => {
    const { container } = render(
      <GlobalContext>
        <TasksContext.Provider value={taskMockValueEmptyTasks}>
          <Tasks />
        </TasksContext.Provider>
      </GlobalContext>
    );

    expect(container).toBeInTheDocument();
  });
});
