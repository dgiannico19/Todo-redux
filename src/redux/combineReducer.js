import { combineReducers } from 'redux';
import { todoReducer } from './todo/todoReducer';

export const reducer = combineReducers({
  todo: todoReducer,
});
