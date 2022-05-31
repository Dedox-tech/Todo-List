import { configureStore } from '@reduxjs/toolkit';
import { todosSlice } from '../components/TodoReducer';

export const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
});


