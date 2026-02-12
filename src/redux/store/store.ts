import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./../slice/darkModeSlice";
import formReducer from "./../slice/formSlice";

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    form: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
