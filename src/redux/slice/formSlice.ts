import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { FormData } from "../../data/mockData";

// ---------- LocalStorage Helpers ----------
const STORAGE_KEY = "forms";

const loadFromStorage = (): FormData[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error loading from localStorage", error);
    return [];
  }
};

const saveToStorage = (data: FormData[]) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error("Error saving to localStorage", error);
  }
};

// ---------- State ----------
interface FormState {
  data: FormData[];
  currentForm?: FormData;
}

const initialState: FormState = {
  data: loadFromStorage(), // داده‌ها از LocalStorage خوانده می‌شود
  currentForm: undefined,
};

// ---------- Slice ----------
export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    // بروزرسانی فیلد خاص در currentForm
    updateField: (
      state,
      action: PayloadAction<{ field: string; value: any }>,
    ) => {
      if (!state.currentForm) state.currentForm = {} as FormData;
      const keys = action.payload.field.split(".");
      let obj: any = state.currentForm;
      for (let i = 0; i < keys.length - 1; i++) {
        if (!obj[keys[i]]) obj[keys[i]] = {};
        obj = obj[keys[i]];
      }
      obj[keys[keys.length - 1]] = action.payload.value;
    },

    // ثبت فرم جدید
    addFormData: (state, action: PayloadAction<FormData>) => {
      state.data.push(action.payload);
      saveToStorage(state.data); // ذخیره در LocalStorage
      state.currentForm = undefined;
    },

    // حذف فرم
    removeFormData: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter(
        (item) => item.createdAt !== action.payload,
      );
      saveToStorage(state.data);
    },

    // پاک کردن کل داده‌ها
    clearAllData: (state) => {
      state.data = [];
      saveToStorage([]);
    },
  },
});

export const { updateField, addFormData, removeFormData, clearAllData } =
  formSlice.actions;

export default formSlice.reducer;
