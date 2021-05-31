import styled from 'styled-components';
import modify from '../../img/modify.svg';
import modifyHover from '../../img/modify-hover.svg';
import deleteSvg from '../../img/delete.svg';
import deleteHover from '../../img/delete-full.svg';

export const TodoLi = styled.li`
  color: black;
`;

export const EditModeInput = styled.input`
  background-color: transparent;
  height: 100% !important;
  border: none !important;
  color: #545e6f !important;
`;

export const EditTodoBtn = styled.button`
  width: 22px;
  height: 20px;
  background: url(${modify}) no-repeat center center;
  background-size: contain;
  background-clip: padding-box;
  outline: 0;
  cursor: pointer;
  padding: 0;
  border: 1px solid transparent;
  margin-left: auto;
  order: 3;
  flex-shrink: 0;
  position: relative;
  z-index: 2;
  margin-right: 5px;
  &:hover,
  :focus {
    background: url(${modifyHover}) no-repeat center center;
    background-size: contain;
    background-clip: padding-box;
  }
  &:active {
    transform: scale(0.9);
  }
`;
export const DeleteTodoBtn = styled.button`
  border-radius: 50%;
  width: 24px;
  height: 24px;
  background: url(${deleteSvg}) no-repeat center center;
  background-size: contain;
  background-clip: padding-box;
  outline: 0;
  cursor: pointer;
  padding: 0;
  border: 1px solid transparent;
  margin-left: auto;
  order: 3;
  flex-shrink: 0;
  position: relative;
  z-index: 2;
  &:hover,
  :focus {
    background: url(${deleteHover}) no-repeat center center;
    background-size: contain;
    background-clip: padding-box;
  }
  &:active {
    transform: scale(0.9);
  }
`;
