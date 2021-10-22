import { combineReducers } from "redux";
import { StateType } from "typesafe-actions";
import auth from "./auth";

export const reducer = combineReducers({
  auth,
});

export type RootState = StateType<typeof reducer>;
