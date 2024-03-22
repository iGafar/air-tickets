import { configureStore } from "@reduxjs/toolkit";
import ticketsSlice from "./slices/ticketsSlice";
import filterSlice from "./slices/filterSlice";

export const store = configureStore({
  reducer: {
    tickets: ticketsSlice,
    filter: filterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
