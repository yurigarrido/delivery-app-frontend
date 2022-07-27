import { createSlice } from '@reduxjs/toolkit';

export const register = createSlice({
  name: 'register',
  initialState: {
    email: '',
    password: '',
    name: ''
  },
  reducers: {
    onChangeInput: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onChangeInput, incrementByAmount } = register.actions;

export default register.reducer;
