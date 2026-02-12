import { createSlice } from "@reduxjs/toolkit";

interface DarkModeState {
  dark: boolean;
}

const initialState: DarkModeState = {
  dark: false,
};

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.dark = !state.dark;
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
