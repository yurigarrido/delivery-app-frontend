import { createSlice } from '@reduxjs/toolkit';

export const toast = createSlice({
  name: 'toast',
  initialState: {
    toasts: []
  },
  reducers: {
    createToast: (state, action) => {
      state.toasts = [...state.toasts, {id: Math.random(), ...action.payload}];
    },
    removeToast: (state, action) => {
      console.log(action)
      state.toasts = state.toasts.filter(toast => toast.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { createToast, removeToast } = toast.actions;
export const toasts = (state) => state.toasts.toasts;
export default toast.reducer;
