import TodoForm from "../ToDoForm/TodoForm.jsx";
import TodoList from "../ToDoList/ToDoList.jsx";
import styled from "./styles.js";

const ToDoPages = () => {
  return (
    <styled.TodosDiv>
      <styled.TodosHeaderDiv>
        <TodoList />
      </styled.TodosHeaderDiv>
      <TodoForm />
    </styled.TodosDiv>
  );
};

export default ToDoPages;
