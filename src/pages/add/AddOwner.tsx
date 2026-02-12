import { useState } from "react";
import { Controller, type Control } from "react-hook-form";
import TextInput from "../../components/TextInput";
import NumericInput from "../../components/NumericInput";
import DateInput from "../../components/DateInput";

type Props = {
  control: Control<any>; // control از react-hook-form
};

export default function AddOwnerAccordion({ control }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-white/20 rounded-2xl shadow-inner p-4 bg-(--bg)">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-3 rounded-xl bg-(--bg) shadow-md border border-white/20 transition hover:scale-[1.02]"
      >
        <span>اطلاعات مالک</span>
        <span className="text-xl">{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className="mt-4 space-y-3">
          <Controller
            name="owner.firstName"
            control={control}
            render={({ field }) => <TextInput {...field} placeholder="نام" />}
          />
          <Controller
            name="owner.lastName"
            control={control}
            render={({ field }) => (
              <TextInput {...field} placeholder="نام خانوادگی" />
            )}
          />
          <Controller
            name="owner.nationalCode"
            control={control}
            render={({ field }) => (
              <NumericInput {...field} placeholder="کد ملی" maxLength={10} />
            )}
          />
          <Controller
            name="owner.birthDate"
            control={control}
            render={({ field }) => (
              <DateInput {...field} placeholder="تاریخ تولد" />
            )}
          />
          <Controller
            name="owner.phone"
            control={control}
            render={({ field }) => (
              <NumericInput
                {...field}
                placeholder="شماره تماس"
                maxLength={11}
              />
            )}
          />
        </div>
      )}
    </div>
  );
}
