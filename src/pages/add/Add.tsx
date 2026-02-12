import { useState } from "react";
import { TbPlus } from "react-icons/tb";
import AddFormSheet from "./AddFormSheet";

export default function Add() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="w-full mx-auto flex flex-col min-h-[80vh] relative">
      <div className="flex-1 flex items-center justify-center text-center text-lg opacity-60">
        برای افزودن اطلاعات روی دکمه ➕ بزن
      </div>

      <button
        onClick={() => setOpenForm(true)}
        className="
          fixed bottom-6 right-6 sm:bottom-10 sm:right-10
          w-16 h-16 rounded-full text-3xl
          bg-(--bg) text-(--text)
         shadow-[8px_8px_16px_rgba(0,0,0,0.2),-8px_-8px_16px_rgba(255,255,255,0.08)]
          border border-white/20
          flex items-center justify-center
          transition duration-300 active:scale-95 hover:scale-105
        "
      >
        <TbPlus />
      </button>

      <AddFormSheet open={openForm} onClose={() => setOpenForm(false)} />
    </div>
  );
}
