import { createContext, useContext, useState } from "react";
import { VISIBILITY_FILTER } from "../VisibilityFilter";

const TodoContext = createContext();
export const useTodo = () => useContext(TodoContext);
const randomID = () => {
  return 9000 + Math.trunc(Math.random() * 1000);
};
function ContextProvider({ children }) {
  const [todo, setTodo] = useState([]);
  const [filter, setVisibleFilter] = useState(VISIBILITY_FILTER.ALL);
  const todoID = randomID();

  const addTodo = (input) => {
    setTodo([
      ...todo,
      {
        id: todoID,
        content: input,
        complete: false,
      },
    ]);
  };
  const completeTodo = (curentID, status) => {
    setTodo(
      todo.map((todoKey) =>
        todoKey.id === curentID
          ? { ...todoKey, complete: status }
          : { ...todoKey }
      )
    );
  };

  const setFilter = (filter) => {
    setVisibleFilter(filter);
  };
  const deleteTodo = (id) => {
    setTodo(todo.filter((t) => t.id !== id));
  };
  return (
    <TodoContext.Provider
      value={{ todo, addTodo, completeTodo, deleteTodo, filter, setFilter }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export default ContextProvider;
