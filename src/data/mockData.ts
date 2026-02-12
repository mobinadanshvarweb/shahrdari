// ===== Mock Data for Add Form =====
// این فایل شامل داده‌های نمونه برای فرم افزودن اطلاعات
// و تابعی برای اضافه کردن داده جدید است.
// با این کار حتی اگر کاربر چیزی وارد نکرده باشد، لیست اولیه قابل نمایش است.

export interface Owner {
  firstName: string;
  lastName: string;
  nationalCode: string;
  birthDate: string; // YYYY-MM-DD
  phone: string;
}

export interface Code {
  region: string; // 2 رقم
  neighborhood: string; // 2 رقم
  block: string; // 3 رقم
  property: string; // 3 رقم
  building: string; // 2 رقم
  apartment?: string; // 3 رقم اختیاری
  unit?: string; // 3 رقم اختیاری
}

export interface FormData {
  code: Code;
  hasEndWork: boolean;
  endWorkDate?: string; // YYYY-MM-DD، اگر پایان کار دارد
  structureType: "فلزی" | "بتن" | "آجر";
  description: string;
  owner: Owner;
  createdAt: string; // ISO timestamp
}

// ---------- داده فیک اولیه ----------
export const mockData: FormData[] = [
  {
    code: {
      region: "01",
      neighborhood: "02",
      block: "123",
      property: "456",
      building: "01",
      apartment: "007",
      unit: "002",
    },
    hasEndWork: true,
    endWorkDate: "2026-02-12",
    structureType: "فلزی",
    description: "ملک نمونه شماره 1",
    owner: {
      firstName: "علی",
      lastName: "رضایی",
      nationalCode: "0012345678",
      birthDate: "1370-01-01",
      phone: "09123456789",
    },
    createdAt: "2026-02-12T18:22:10.000Z",
  },
  {
    code: {
      region: "02",
      neighborhood: "01",
      block: "456",
      property: "789",
      building: "02",
      apartment: "003",
      unit: "001",
    },
    hasEndWork: false,
    structureType: "بتن",
    description: "ملک نمونه شماره 2",
    owner: {
      firstName: "سارا",
      lastName: "محمدی",
      nationalCode: "0098765432",
      birthDate: "1365-05-15",
      phone: "09121234567",
    },
    createdAt: "2026-02-12T19:00:00.000Z",
  },
];

// ---------- دیتاست ذخیره موقت ----------
let dataStore: FormData[] = [...mockData];

// ---------- توابع کمکی ----------

// دریافت تمام داده‌ها
export const getMockData = (): FormData[] => {
  return dataStore;
};

// اضافه کردن یک داده جدید
export const addMockData = (item: FormData): FormData => {
  dataStore.push(item);
  return item;
};

// ریست کردن داده‌ها (اختیاری برای تست)
export const resetMockData = () => {
  dataStore = [...mockData];
};
