import React from "react";
import { useSelector } from "react-redux";
import Todo from "../ToDo/ToDo";
import styled from "./styles";

const ToDoList = () => {
  const toDos = useSelector((data) => data.todo);

  return (
    <styled.ListTodo className="todos-list">
      {!toDos.length && (
        <styled.NoTasksText>Not tasks assigned.</styled.NoTasksText>
      )}
      {toDos?.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </styled.ListTodo>
  );
};

export default ToDoList;
