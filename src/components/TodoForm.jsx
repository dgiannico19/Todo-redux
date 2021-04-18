import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todo/todoAction";

const TodoForm = () => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState({
    description: "",
    color: "var(--violeta)",
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
      color,
    });
  };

  return (
    <>
      <form className="todos-form" name="todos" onSubmit={handlerSubmit}>
        <input
          className="form-input"
          type="text"
          placeholder="Add a new task"
          name="description"
          onChange={handleChange}
          value={description}
        />
        <select
          className="form-color"
          type="color"
          name="color"
          style={{ backgroundColor: `${color}` }}
          onChange={handleChange}
          value={color}
        >
          <option
            style={{ backgroundColor: "var(--magenta)" }}
            value="var(--magenta)"
          ></option>
          <option
            style={{ backgroundColor: "var(--verde)" }}
            value="var(--verde)"
          ></option>
          <option
            style={{ backgroundColor: "var(--violeta)" }}
            value="var(--violeta)"
          ></option>
          <option
            style={{ backgroundColor: "var(--mostaza)" }}
            value="var(--mostaza)"
          ></option>
        </select>
        <button className="btn-form-add" type="submit">
          +
        </button>
      </form>
    </>
  );
};

export default TodoForm;
