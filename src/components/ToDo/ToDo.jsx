import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, editMod, editTodo } from '../../redux/todo/actions';
import {
  TodoLi,
  EditModeInput,
  EditTodoBtn,
  DeleteTodoBtn,
} from '../../styles/styled-component/TodoStyle';

const ToDo = ({ todo }) => {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const [inputValue, setInputValue] = useState(todo.description);

  const handlerEdit = () => dispatch(editMod(todo.id));

  const handlerEditTodo = (e) => {
    if (e.key === 'Enter') {
      dispatch(editTodo(todo.id, inputValue));
      dispatch(editMod(todo.id));
    }
  };

  const handlerBlur = () => {
    dispatch(editTodo(todo.id, inputValue));
    dispatch(editMod(todo.id));
  };

  useEffect(() => {
    if (!todo.editMode) return;
    inputRef.current.focus();
  }, [todo.editMode]);

  return (
    <>
      <TodoLi backgroundColor={todo.color}
        // style={{
        //   backgroundColor: `${todo.color}`,
        // }}
      >
        {todo.editMode ? (
          <span>
            <EditModeInput
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handlerEditTodo}
              onBlur={handlerBlur}
            />
          </span>
        ) : (
          <span>{todo.description}</span>
        )}

        <EditTodoBtn type="button" onClick={handlerEdit} />
        <DeleteTodoBtn
          type="button"
          onClick={() => dispatch(deleteTodo(todo.id))}
        />
      </TodoLi>
    </>
  );
};

export default ToDo;
