import { ADD_TODO, DELETE_TODO, EDIT_MODE, EDIT_TODO } from './todoAction';

const initialState = [];

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case DELETE_TODO:
      state = state.filter((todo) => todo.id !== action.id);
      return state;

    case EDIT_MODE:
      state = state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            editMode: !todo.editMode,
          };
        }
        return todo;
      });
      return state;

    case EDIT_TODO:
      state = state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            description: action.newText,
          };
        }
        return todo;
      });
      return state;

    default:
      return state;
  }
};
