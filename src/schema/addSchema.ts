import * as z from "zod";

// ---------- Zod Schema فرم افزودن اطلاعات ----------
export const addSchema = z.object({
  code: z.object({
    region: z.string().min(1, "پر کردن منطقه الزامی است"),
    neighborhood: z.string().min(1, "پر کردن محله الزامی است"),
    block: z.string().min(1, "پر کردن بلوک الزامی است"),
    property: z.string().min(1, "پر کردن ملک الزامی است"),
    building: z.string().min(1, "پر کردن ساختمان الزامی است"),
    apartment: z.string().optional(), // اختیاری
    unit: z.string().optional(), // اختیاری
  }),
  hasEndWork: z.boolean(),
  endWorkDate: z.string().optional(), // فقط اگر پایان کار دارد
  structureType: z.enum(["فلزی", "بتن", "آجر"]),
  description: z.string().min(1, "پر کردن توضیحات الزامی است"),
  owner: z.object({
    firstName: z.string().min(1, "نام الزامی است"),
    lastName: z.string().min(1, "نام خانوادگی الزامی است"),
    nationalCode: z.string().min(1, "کد ملی الزامی است"),
    birthDate: z.string().min(1, "تاریخ تولد الزامی است"),
    phone: z.string().min(1, "شماره تماس الزامی است"),
  }),
});

// ---------- استخراج type TypeScript برای useForm ----------
export type AddFormValues = z.infer<typeof addSchema>;
