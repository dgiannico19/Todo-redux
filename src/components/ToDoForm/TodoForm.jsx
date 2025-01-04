import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

//importo estilos
import {
  TodosForm,
  FormInput,
  FormColor,
  BtnFormAdd,
} from '../../styles/styled-component/TodoFormStyle';
import { addTodo } from '../../redux/todo/todoAction';

const TodoForm = () => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState({
    description: '',
    color: 'var(--violeta)',
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
    if (inputValue.description === '') return;

    dispatch(addTodo(inputValue));

    setInputValue({
      description: '',
      color,
    });
  };

  return (
    <>
      <TodosForm name="todos" onSubmit={handlerSubmit}>
        <FormInput
          type="text"
          placeholder="Add a new task"
          name="description"
          onChange={handleChange}
          value={description}
        />
        <FormColor
          type="color"
          name="color"
          style={{ backgroundColor: `${color}` }}
          onChange={handleChange}
          value={color}
        >
          <option
            style={{ backgroundColor: 'var(--magenta)' }}
            value="var(--magenta)"
          ></option>
          <option
            style={{ backgroundColor: 'var(--verde)' }}
            value="var(--verde)"
          ></option>
          <option
            style={{ backgroundColor: 'var(--violeta)' }}
            value="var(--violeta)"
          ></option>
          <option
            style={{ backgroundColor: 'var(--mostaza)' }}
            value="var(--mostaza)"
          ></option>
        </FormColor>
        <BtnFormAdd style={{ placeSelf: 'center' }} type="submit">
          +
        </BtnFormAdd>
      </TodosForm>
    </>
  );
};

export default TodoForm;
