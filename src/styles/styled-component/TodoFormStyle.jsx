import styled from 'styled-components';

export const TodosForm = styled.form`
  display: grid;
  position: relative;
  justify-content: center;
  padding: 20px 0px 20px;
  grid-template-columns: 5fr 1fr;
  grid-gap: 0 5px;
`;

export const FormInput = styled.input`
  border-radius: 4px;
  border: 1px solid #dcdfe4;
  padding: 12px 14px;
  outline: 0;
  font-family: 'Poppins';
  font-size: 14px;
  color: #545e6f;
  &::placeholder {
    color: #777d8c;
  }
  &:focus {
    border-color: blueviolet;
    box-shadow: 0 0 0 2px rgb(231, 221, 240);
  }
`;
export const FormColor = styled.select`
  width: 100%;
  height: 100%;
  border: 1px solid #dcdfe4;
  cursor: pointer;
`;
export const BtnFormAdd = styled.button`
  position: absolute;
  bottom: -50px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--amarillo);
  color: #00000052;
  box-shadow: 0 3px 12px #0000002c;
  border: transparent solid 1px;
  font-size: 40px;
  opacity: 0.95;
  transition: all 1s;
  cursor: pointer;
  &:hover {
    opacity: 1;
    box-shadow: 0 9px 12px #00000034;
  }
  &:active {
    opacity: 1;
    transform: scale(0.98);
  }
`;
