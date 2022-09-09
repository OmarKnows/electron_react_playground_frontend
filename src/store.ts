import { configureStore } from "@reduxjs/toolkit";
import docReducer from "./features/docs/docSlice";

export const store = configureStore({
  reducer: {
    doc: docReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
