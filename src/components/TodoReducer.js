import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
    name: 'lista',
    initialState: {
      arrayOfItems: []
    },
    reducers: {
      addElement: (state, action) => {
        state.arrayOfItems.push(action.payload);
      },

      deleteElement: (state, action) => {
        state.arrayOfItems = state.arrayOfItems.filter(item => item.element !== action.payload.element);
      },

      changeStatus: (state, action) => {
        for (let i = 0; i < state.arrayOfItems.length; i++) {
            if (state.arrayOfItems[i].element === action.payload.element) {
                state.arrayOfItems[i].isCompleted = !state.arrayOfItems[i].isCompleted;
            }
        }
      },

      editElement: (state, action) => {
        for (let i = 0; i < state.arrayOfItems.length; i++) {
            if (state.arrayOfItems[i].element === action.payload.previousElement) {
                state.arrayOfItems[i].element = action.payload.element;
            }
        }
      }
    }
});

export const { addElement, deleteElement, changeStatus, editElement } = todosSlice.actions
export {todosSlice};