import React from 'react';
import styled from 'styled-components';
import TodoForm from './TodoForm.jsx';
import TodoList from './TodoList';

const TodosDiv = styled.div`
  width: 350px;
  margin: 0 auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 3px 0 rgba(84, 94, 111, 0.2);
  padding: 20px;
`;

const TodosHeaderDiv = styled.div`
  position: relative;
  max-height: 350px;
  overflow: auto;
`;

const TodoPages = () => {
  return (
    <TodosDiv>
      <TodosHeaderDiv>
        <TodoList />
        <div></div>
      </TodosHeaderDiv>
      <TodoForm />
    </TodosDiv>
  );
};

export default TodoPages;
