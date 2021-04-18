import React from "react";
import TodoForm from "./TodoForm.jsx";
import TodoList from "./TodoList";
// import { useSelector, useDispatch } from "react-redux";
// import { deleteComplete } from "../actions/todoActions";

const TodoPages = () => {
  // const dispatch = useDispatch();
  // const todoList = useSelector((state) => state.todosList);
  // const completes = todoList.filter((todo) => todo.complete);

  // const handlerCompletes = () => {
  //   // dispatch(deleteComplete());
  // };

  return (
    <div className="todos">
      <div className="todos-header">
        <TodoList />

        <div>
          {/* {completes.length > 0 ? (
            <button
              type="button"
              className="todos-clear"
              onClick={handlerCompletes}
            >
              Borra Completados
            </button>
          ) : null} */}
        </div>
      </div>
      <TodoForm />
    </div>
  );
};

export default TodoPages;
