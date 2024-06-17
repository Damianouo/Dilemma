import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  info: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      (state.isLogin = true), (state.info = action.payload);
    },
    logout: (state) => {
      (state.isLogin = false), (state.info = {});
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
