import React from 'react';
import Todo from './Todo.jsx';
import { useSelector } from 'react-redux';

import styled from 'styled-components';

const ListTodo = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  & li input[type='text'] {
    order: 2;
    width: 88%;
    padding: 0 0 0 50px;
    border: none;
    outline: 0;
    font-family: 'Poppins';
    color: #545e6f;
    line-height: 26px;
    font-size: 16px;
    letter-spacing: 0.2px;
    position: absolute;
    top: 0;
    left: 0;
    height: 42px;
    border-bottom: 1px solid #d2d5da;
    box-shadow: inset 0 1px 3px #d2d5da;
    z-index: 1;
  }
  & li {
    opacity: 0.9;
    position: relative;
    line-height: 26px;
    font-size: 16px;
    padding: 20px;
    display: flex;
    align-items: center;
    border: 1px solid #b7b7b7;
    margin: 5px 0;
    border-radius: 5px;
  }
  & li:hover {
    opacity: 1;
  }
  & li:last-child input[type='text'] {
    border-radius: 0 0 10px 10px;
  }
  & li span {
    flex-grow: 1;
    order: 2;
  }
`;

const TodoList = () => {
  const todos = useSelector((data) => data.todo);
  const titulo = todos.length === 0 && (
    <p style={{ textAlign: 'center' }}>Not tasks assigned.</p>
  );

  return (
    <ListTodo className="todos-list">
      {titulo}
      {todos?.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ListTodo>
  );
};

export default TodoList;
