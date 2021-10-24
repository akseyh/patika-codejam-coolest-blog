import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { createStore, Dispatch } from 'redux'

const auth = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    user: {},
    error: null,
    token: null
  },
  reducers: {
    authRequest: (state) => {
      state.loading = true;
    },
    authError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.user = {}
      state.token = null
    },
    authReceived: (state, action) => {
      state.loading = false;
      const {data} = action.payload
      state.user = {
        userId: data.userId,
        username: data.username
      }
      state.token = data.token
      console.log(state.token)
    }
  },
});
export default auth.reducer;
export const { authRequest, authError, authReceived } = auth.actions;

const store = createStore(auth.reducer)

export const login = ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  return (dispatch: Dispatch<any>) => {
    return axios.post('https://coolest-blog-api.herokuapp.com/login', { username, password })
      .then(res => store.dispatch(auth.actions.authReceived(res)))
      .catch(err => store.dispatch(auth.actions.authError(err.response)))
  }
};
