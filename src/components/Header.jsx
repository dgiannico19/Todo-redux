import React from 'react';
import styled from 'styled-components';

const HeaderBack = styled.header`
  padding: 30px 10px;
`;

const TodoTitle = styled.h1`
  text-align: center;
  color: var(--amarillo);
  font-weight: 100;
  font-size: 45px;
  margin-bottom: 0;
  letter-spacing: 3px;
`;

const Header = () => {
  return (
    <>
      <HeaderBack>
        <TodoTitle>
          <b>Todo</b>Tasks
        </TodoTitle>
      </HeaderBack>
    </>
  );
};

export default Header;
