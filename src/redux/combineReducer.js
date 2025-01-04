import { combineReducers } from 'redux';
import { todoReducer } from './todo/reducer';

export const reducer = combineReducers({
  todo: todoReducer,
});
