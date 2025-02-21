import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { tablesSlice } from "../modules/tables-slice";
import { useDispatch, useSelector } from "react-redux";
import { cardsSlice } from "../modules/cards-slice";
import { commentsSlice } from "../modules/comments-slice";

const reducer = combineReducers({
  [tablesSlice.name]: tablesSlice.reducer,
  [cardsSlice.name]: cardsSlice.reducer,
  [commentsSlice.name]: commentsSlice.reducer
})

export const store = configureStore({
  reducer: reducer,
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<AppState>();