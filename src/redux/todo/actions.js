import { Todo } from '../../models/Todo';
import { ADD_TODO, DELETE_TODO, EDIT_MODE, EDIT_TODO } from './types';

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: new Todo(text),
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});

export const editMod = (id) => ({
  type: EDIT_MODE,
  id,
});

export const editTodo = (id, newText) => ({
  type: EDIT_TODO,
  id,
  newText,
});
