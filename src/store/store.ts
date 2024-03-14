import { configureStore } from "@reduxjs/toolkit";
import ticketsSlice from "./slices/ticketsSlice";

export const store = configureStore({
  reducer: {
    tickets: ticketsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
