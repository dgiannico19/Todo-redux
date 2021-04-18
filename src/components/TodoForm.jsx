import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todo/todoAction";

const TodoForm = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({
    description: "",
    color: "#000000",
  });

  const { description, color } = inputValue;

  const handleChange = ({ target }) => {
    setInputValue({
      ...inputValue,
      [target.name]: target.value,
    });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (inputValue.description === "") return;

    dispatch(addTodo(inputValue));

    setInputValue({
      description: "",
      color: "",
    });
  };

  return (
    <>
      <hr />
      <form className="todos-form" name="todos" onSubmit={handlerSubmit}>
        <input
          className="form-input"
          type="text"
          placeholder="Agrega una Tarea"
          name="description"
          onChange={handleChange}
          value={description}
        />
        <input
          className="form-color"
          type="color"
          name="color"
          style={{ padding: "0" }}
          onChange={handleChange}
          value={color}
        />
        <button className="btn-form-add" type="submit">
          +
        </button>
      </form>
    </>
  );
};

export default TodoForm;
