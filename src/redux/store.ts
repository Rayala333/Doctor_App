import { configureStore } from "@reduxjs/toolkit";
import { alertSlice } from "./alertsSlice";
import { userSlice } from "./userSlice"; // Update import
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  alert: alertSlice.reducer,
  User: userSlice.reducer, // Update key to match the slice name
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;