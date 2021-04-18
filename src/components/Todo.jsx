import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editMode } from "../redux/todo/todoAction";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  //   const [inputValue, setInputValue] = useState(todo.label);

  //   const handlerChecked = () => dispatch(completeTodo(todo.id));

  const handlerEdit = () => dispatch(editMode(todo.id));

  //   const handlerEditTodo = (e) => {
  //  if (e.key === "Enter") {
  //    dispatch(editTodo(todo.id, inputValue));
  //    dispatch(editMode(todo.id));
  //  }
  //   };

  //   useEffect(() => {
  //     if (todo.editMode) {
  //       myInput.current.focus();
  //     }
  //   }, [todo.editMode]);

  return (
    <>
      <li
        style={{
          backgroundColor: `${todo.color}`,
          color: `${todo.color === "#ffffff" ? "#000000" : "#ffffff"}`,
          textShadow: `${
            todo.color === "#ffffff" ? null : "0 0 3px #00000094"
          }`,
        }}
      >
        <span>{todo.description}</span>
        <button
          className="btn-todo-edit"
          type="button"
          onClick={handlerEdit}
        ></button>
        <button
          className="btn-todo-delete"
          type="button"
          onClick={() => dispatch(deleteTodo(todo.id))}
        ></button>
      </li>
    </>
  );
};

export default Todo;
