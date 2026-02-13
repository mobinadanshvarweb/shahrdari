import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";
import FormCard from "./FormCard";
import { useState } from "react";

const List = () => {
  const data = useSelector((state: RootState) => state.form.data);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex flex-col min-h-screen p-4 sm:p-6 bg-[var(--bg)] text-[var(--text)] space-y-4">
      {data.length === 0 ? (
        <p className="text-center text-gray-500 mt-20">
          هیچ اطلاعاتی ثبت نشده است
        </p>
      ) : (
        data.map((item, index) => (
          <FormCard
            key={item.createdAt}
            item={item}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))
      )}
    </div>
  );
};

export default List;
