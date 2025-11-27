import { useState } from "react";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    if (!task.trim()) return;
    setTodos([...todos, task]);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: 20, maxWidth: 400 }}>
      <h2>Todo App</h2>

      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}
