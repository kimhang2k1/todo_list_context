import { useTodo } from "../context/context";
import { VISIBILITY_FILTER } from "../VisibilityFilter";

import Todo from "./Todo";

function TodoList() {
  const { todo, filter } = useTodo();
  const todos =
    filter === VISIBILITY_FILTER.ALL
      ? todo
      : filter === VISIBILITY_FILTER.COMPLETE
      ? todo.filter((t) => t.complete)
      : todo.filter((t) => !t.complete);
  return (
    <div className="list-todo-app">
      {todos.map((todo) => {
        return <Todo key={todo.id} {...todo} />;
      })}
    </div>
  );
}

export default TodoList;
