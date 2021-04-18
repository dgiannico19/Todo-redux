import React from "react";
import Todo from "./Todo.jsx";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((data) => data.todo);
  const titulo = todos.length === 0 && (
    <p style={{ textAlign: "center" }}>No hay tareas asignadas.</p>
  );

  return (
    <ul className="todos-list">
      {titulo}
      {todos?.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
