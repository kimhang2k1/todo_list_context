import { useTodo } from "../context/context";
import { VISIBILITY_FILTER } from "../VisibilityFilter";

function TodoFilter() {
  const { setFilter, filter } = useTodo();
  return (
    <div className="todo-filter">
      <ul>
        {Object.keys(VISIBILITY_FILTER).map((FilterKey) => {
          const currentFilter = VISIBILITY_FILTER[FilterKey];
          return (
            <li
              className={currentFilter === filter ? "active" : "filter"}
              key={`visibilty-filter ${currentFilter}`}
              onClick={() => setFilter(currentFilter)}
            >
              {currentFilter}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default TodoFilter;
