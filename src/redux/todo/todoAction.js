import { Todo } from "../../models/Todo";

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const EDIT_MODE = "EDIT_MODE";
export const EDIT_TODO = "EDIT_TODO";

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
