import React, { useState } from "react";
import { useTodo } from "../context/context";

function TodoForm() {
  const [input, setInput] = useState("");
  const { addTodo } = useTodo();
  const changeInput = (e) => {
    setInput(e.target.value);
  };
  const handleAddTodo = () => {
    addTodo(input);
    setInput("");
  };

  return (
    <div className="form-todo-list">
      <input
        type="text"
        placeholder="Add todo..."
        value={input}
        onChange={changeInput}
      />
      <button onClick={handleAddTodo}> +</button>
    </div>
  );
}
export default TodoForm;
