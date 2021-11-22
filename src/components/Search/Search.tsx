import { useContext, useEffect, useState } from "react";
import { TasksContext } from "../../contexts/GlobalContext/tasksContext";
import { UIContext } from "../../contexts/GlobalContext/uiContext";

import {
  ActionButton,
  ActionsContainer,
  CheckBox,
  FilterButton,
  Input,
  Wrapper,
} from "./Search.style";

import { ReactComponent as FilterIcon } from "../../assets/icons/funnel.svg";

const Search = () => {
  const { items, archiveItems, selectAllTasks, selectedTasks, currentMenuId } =
    useContext(TasksContext);
  const { userLanguage } = useContext(UIContext);

  const { searchComponent } = userLanguage.dashboardPage;

  const [allSelected, setAllSelected] = useState<boolean>(false);

  const handleArchiveTask = () => {
    archiveItems();
    setAllSelected(false);
  };

  useEffect(() => {
    const currentMenuTasks = items.filter((it) => it.id === currentMenuId);
    const taskIds =
      currentMenuTasks.length > 0
        ? currentMenuTasks[0].subMenuItems.map((item) => item.id)
        : [];

    if (selectedTasks.length > 0 && selectedTasks.length === taskIds.length) {
      setAllSelected(true);
    } else {
      setAllSelected(false);
    }
  }, [items, selectedTasks, currentMenuId]);

  return (
    <Wrapper>
      <Input type="text" placeholder={searchComponent.search} width="100%" />
      <ActionsContainer>
        <CheckBox
          type="checkbox"
          data-testid="select-tasks-checkbox"
          checked={allSelected}
          onChange={selectAllTasks}
        />
        <ActionButton>{searchComponent.assign}</ActionButton>
        <ActionButton data-testid="archive-button" onClick={handleArchiveTask}>
          {searchComponent.archive}
        </ActionButton>
        <ActionButton>{searchComponent.schedule}</ActionButton>
        <FilterButton>
          <FilterIcon />
        </FilterButton>
      </ActionsContainer>
    </Wrapper>
  );
};

export default Search;
