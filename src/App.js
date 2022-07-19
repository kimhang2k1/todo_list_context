import TodoFilter from "./component/TodoFilter";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";

function App() {
  return (
    <>
      <div className="todo-list-app">
        <div className="todo">
          <div className="title-todo-app">
            <h1>TODO APP BY CONTEXT</h1>
          </div>
          <TodoForm />
          <TodoList />
          <TodoFilter />
        </div>
      </div>
    </>
  );
}

export default App;
