import React from "react";

const Todo = ({ todo }) => {
  //   const [inputValue, setInputValue] = useState(todo.label);

  //   const handlerChecked = () => dispatch(completeTodo(todo.id));

  //   const handlerDelete = () => dispatch(deleteTodo(todo.id));

  //   const handlerEdit = () => dispatch(editMode(todo.id));

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
        }}
      >
        <span>{todo.description}</span>
        <button className="btn-todo-edit" type="button"></button>
        <button className="btn-todo-delete" type="button"></button>
      </li>
    </>
  );
};

export default Todo;
