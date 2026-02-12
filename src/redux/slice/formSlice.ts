import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { FormData } from "../../data/mockData";
import { getMockData, addMockData } from "../../data/mockData";

interface FormState {
  data: FormData[]; // تمام فرم‌های ثبت شده
  currentForm?: FormData; // فرم در حال ویرایش (اختیاری)
}

const initialState: FormState = {
  data: getMockData(), // لیست اولیه از Mock
  currentForm: undefined,
};

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
      const keys = action.payload.field.split("."); // مثال: "code.region"
      let obj: any = state.currentForm;

      for (let i = 0; i < keys.length - 1; i++) {
        if (!obj[keys[i]]) obj[keys[i]] = {};
        obj = obj[keys[i]];
      }
      obj[keys[keys.length - 1]] = action.payload.value;
    },

    // ثبت فرم جدید
    addFormData: (state, action: PayloadAction<FormData>) => {
      const item = addMockData(action.payload); // اضافه به Mock
      state.data.push(item); // اضافه به Redux
      state.currentForm = undefined; // ریست فرم
    },

    // بارگذاری داده‌ها از Mock (اختیاری)
    loadData: (state) => {
      state.data = getMockData();
    },
  },
});

export const { updateField, addFormData, loadData } = formSlice.actions;

export default formSlice.reducer;
