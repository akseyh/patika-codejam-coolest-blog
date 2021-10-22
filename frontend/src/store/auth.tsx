import { createSlice } from "@reduxjs/toolkit";
// import { Dispatch } from "redux";

const auth = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    user: {},
    error: null,
  },
  reducers: {
    authRequest: (state) => {
      state.loading = true;
    },
    authError: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    authReceived: (state, action) => {
      state.loading = false;
      state.user = action.payload.data;
    },
  },
});
export default auth.reducer;
export const { authRequest, authError, authReceived } = auth.actions;

export const login = ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  return true;
};
