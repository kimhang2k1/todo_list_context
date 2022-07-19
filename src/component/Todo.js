import { useTodo } from "../context/context";

function Todo({ id, content, complete }) {
  const { completeTodo } = useTodo();
  const { deleteTodo } = useTodo();
  const handleComplete = (e) => {
    completeTodo(id, e.target.checked);
  };
  const handleDelete = () => {
    deleteTodo(id);
  };
  return (
    <div className="item-todo-list" key={id + content}>
      <div className="content-todo">
        <span className={complete ? "strike" : "todo"}>
          <input
            type="checkbox"
            style={{ marginRight: "10px" }}
            id={id}
            onChange={handleComplete}
          />
          {content}
        </span>
      </div>
      <div className="icon-todo-app">
        <i className="fa-solid fa-trash" onClick={handleDelete}></i>
      </div>
    </div>
  );
}
export default Todo;
