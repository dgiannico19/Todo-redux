import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editMod, editTodo } from "../redux/todo/todoAction";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const [inputValue, setInputValue] = useState(todo.description);

  const handlerEdit = () => dispatch(editMod(todo.id));

  const handlerEditTodo = (e) => {
    if (e.key === "Enter") {
      dispatch(editTodo(todo.id, inputValue));
      dispatch(editMod(todo.id));
    }
  };

  const handlerBlur = () => {
    dispatch(editTodo(todo.id, inputValue));
    dispatch(editMod(todo.id));
  };

  useEffect(() => {
    if (todo.editMode) {
      inputRef.current.focus();
    }
  }, [todo.editMode]);

  return (
    <>
      <li
        style={{
          backgroundColor: `${todo.color}`,
          color: "black",
        }}
      >
        {todo.editMode ? (
          <span>
            <input
              ref={inputRef}
              className="input-edit-mode"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handlerEditTodo}
              onBlur={handlerBlur}
            />
          </span>
        ) : (
          <span>{todo.description}</span>
        )}

        <button className="btn-todo-edit" type="button" onClick={handlerEdit} />
        <button
          className="btn-todo-delete"
          type="button"
          onClick={() => dispatch(deleteTodo(todo.id))}
        />
      </li>
    </>
  );
};

export default Todo;
