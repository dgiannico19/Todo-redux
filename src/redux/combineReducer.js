import { combineReducers } from 'redux';

//!reducers
import { todoReducer } from './todo/todoReducer';

//! combina todos los reducers
export const reducer = combineReducers({
  todo: todoReducer,
});
