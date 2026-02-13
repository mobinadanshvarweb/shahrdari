import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";

import NumericInput from "../../components/NumericInput";
import DateInput from "../../components/DateInput";
import AddOwnerAccordion from "./AddOwner";
import TextInput from "../../components/TextInput";
import { addFormData } from "../../redux/slice/formSlice";
import { addSchema, type AddFormValues } from "../../schema/addSchema";
import type { RootState } from "../../redux/store/store";

type Props = { open: boolean; onClose: () => void };

export default function AddFormSheet({ open, onClose }: Props) {
  const dispatch = useDispatch();
  const dark = useSelector((state: RootState) => state.darkMode.dark);

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [pendingData, setPendingData] = useState<AddFormValues | null>(null);

  const { handleSubmit, control, watch, reset } = useForm<AddFormValues>({
    resolver: zodResolver(addSchema),
    defaultValues: {
      code: {
        region: "",
        neighborhood: "",
        block: "",
        property: "",
        building: "",
        apartment: "",
        unit: "",
      },
      hasEndWork: false,
      endWorkDate: "",
      structureType: undefined as any,
      description: "",
      owner: {
        firstName: "",
        lastName: "",
        nationalCode: "",
        birthDate: "",
        phone: "",
      },
    },
  });

  const watchHasEndWork = watch("hasEndWork");

  if (!open) return null;

  const onSubmit = (data: AddFormValues) => {
    setPendingData(data);
    setConfirmOpen(true);
  };

  const onConfirm = () => {
    if (!pendingData) return;
    const finalData = { ...pendingData, createdAt: new Date().toISOString() };
    dispatch(addFormData(finalData));
    setConfirmOpen(false);
    reset();
    setPendingData(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className={`relative w-full sm:w-[500px] rounded-t-3xl sm:rounded-3xl 
        bg-[var(--bg)] text-[var(--text)] p-6 sm:p-8 
        shadow-[8px_8px_16px_rgba(0,0,0,0.2),_-8px_-8px_16px_rgba(255,255,255,0.05)] 
        max-h-[90vh] overflow-y-auto ${dark ? "scrollbar-dark" : "scrollbar-light"}`}
      >
        <h2 className="text-xl mb-8 text-center">افزودن اطلاعات ملک</h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 text-right"
        >
          {/* کد ملک */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <Controller
              name="code.region"
              control={control}
              render={({ field }) => (
                <NumericInput {...field} placeholder="منطقه" maxLength={2} />
              )}
            />
            <Controller
              name="code.neighborhood"
              control={control}
              render={({ field }) => (
                <NumericInput {...field} placeholder="محله" maxLength={2} />
              )}
            />
            <Controller
              name="code.block"
              control={control}
              render={({ field }) => (
                <NumericInput {...field} placeholder="بلوک" maxLength={3} />
              )}
            />
            <Controller
              name="code.property"
              control={control}
              render={({ field }) => (
                <NumericInput {...field} placeholder="ملک" maxLength={3} />
              )}
            />
            <Controller
              name="code.building"
              control={control}
              render={({ field }) => (
                <NumericInput {...field} placeholder="ساختمان" maxLength={2} />
              )}
            />
            <Controller
              name="code.apartment"
              control={control}
              render={({ field }) => (
                <NumericInput {...field} placeholder="آپارتمان" maxLength={3} />
              )}
            />
            <Controller
              name="code.unit"
              control={control}
              render={({ field }) => (
                <NumericInput
                  {...field}
                  placeholder="واحد شغلی"
                  maxLength={3}
                />
              )}
            />
          </div>

          {/* توضیحات */}
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <TextInput {...field} placeholder="توضیحات" />
            )}
          />

          {/* نوع سازه */}
          <Controller
            name="structureType"
            control={control}
            render={({ field }) => (
              <div className="flex flex-col">
                <label className="flex w-full  justify-end items-center gap-2 text-xs">
                  نوع سازه
                </label>
                <select
                  {...field}
                  className="p-2 rounded-lg shadow-inner border border-white/20 w-full text-right"
                >
                  <option value="انتخاب کنید" disabled>
                    انتخاب کنید
                  </option>
                  <option value="فلزی">فلزی</option>
                  <option value="بتن">بتن</option>
                  <option value="آجر">آجر</option>
                </select>
              </div>
            )}
          />
          {/* پایان کار */}
          <div className="flex flex-col sm:flex-row justify-end items-start sm:items-center gap-4">
            {watchHasEndWork && (
              <Controller
                name="endWorkDate"
                control={control}
                render={({ field }) => (
                  <DateInput
                    {...field}
                    placeholder="تاریخ پایان کار"
                    className="text-xs"
                  />
                )}
              />
            )}
            <Controller
              name="hasEndWork"
              control={control}
              render={({ field }) => (
                <label className="flex items-center gap-2 text-xs">
                  <input
                    type="checkbox"
                    checked={field.value}
                    onChange={(e) => field.onChange(e.target.checked)}
                    className="mr-2"
                  />
                  پایان کار دارد؟
                </label>
              )}
            />
          </div>

          {/* Accordion مالک */}
          <AddOwnerAccordion control={control} />

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-emerald-500 text-white shadow-md cursor-pointer"
          >
            ثبت اطلاعات
          </button>
        </form>
      </div>

      {/* Confirm Modal */}
      {confirmOpen && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <div className="bg-(--bg) p-6 rounded-2xl shadow-lg w-11/12 max-w-sm text-center">
            <p className="mb-4">آیا از صحت اطلاعات ثبت شده اطمینان دارید؟</p>
            <div className="flex justify-around gap-4">
              <button
                className="px-4 py-2 rounded-lg bg-gray-300 cursor-pointer"
                onClick={() => setConfirmOpen(false)}
              >
                ویرایش
              </button>
              <button
                className="px-4 py-2 rounded-lg bg-emerald-500 text-white cursor-pointer"
                onClick={onConfirm}
              >
                بله
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
