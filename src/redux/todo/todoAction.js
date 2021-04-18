import { Todo } from "../../models/Todo";

export const ADD_TODO = "ADD_TODO";

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: new Todo(text),
});
