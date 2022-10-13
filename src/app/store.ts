import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import favReducer from "../features/favMovieSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const reducer = combineReducers({
  favorites: favReducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: { favorites: persistedReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
