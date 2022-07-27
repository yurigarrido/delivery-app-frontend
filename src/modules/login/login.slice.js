import { createSlice } from '@reduxjs/toolkit';

export const login = createSlice({
  name: 'login',
  initialState: {
    email: '',
    password: '',
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
export const { onChangeInput, incrementByAmount } = login.actions;

export default login.reducer;
