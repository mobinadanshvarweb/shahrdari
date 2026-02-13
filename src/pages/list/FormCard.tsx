import type { FormData } from "../../data/mockData";

// تابع کمکی برای تبدیل اعداد لاتین به فارسی
const toPersianNumber = (str: string | number) =>
  String(str).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[parseInt(d)]);

type Props = {
  item: FormData;
  isOpen: boolean;
  onToggle: () => void;
};

const FormCard = ({ item, isOpen, onToggle }: Props) => {
  return (
    <div className="bg-[var(--bg)] text-[var(--text)] rounded-2xl p-4 shadow-[8px_8px_16px_rgba(0,0,0,0.2),_-8px_-8px_16px_rgba(255,255,255,0.05)] transition-shadow duration-200">
      {/* هدر کارت */}
      <div
        className="flex justify-between items-start cursor-pointer gap-2"
        onClick={onToggle}
      >
        <div>
          <p className="  text-sm sm:text-base leading-tight">
            مالک: {item.owner.firstName} {item.owner.lastName}
          </p>
          <p className="text-xs sm:text-sm text-gray-500 leading-tight">
            تاریخ ثبت:{" "}
            {toPersianNumber(
              new Date(item.createdAt).toLocaleDateString("fa-IR"),
            )}
          </p>
        </div>
        <div className="text-xl select-none mt-1">{isOpen ? "▲" : "▼"}</div>
      </div>

      {/* محتوای بازشونده */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out`}
        style={{
          maxHeight: isOpen ? 500 : 0,
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="mt-2 text-sm sm:text-base space-y-2">
          {/* کد ملک */}
          {/* کد ملک */}
          <div className="p-2 rounded-lg shadow-inner bg-[var(--bg)]">
            <p>
              <span className="">کد ملک:</span>{" "}
              {`${toPersianNumber(item.code.region)}-${toPersianNumber(item.code.neighborhood)}-${toPersianNumber(item.code.block)}-${toPersianNumber(item.code.property)}-${toPersianNumber(item.code.building)}-${toPersianNumber(item.code.apartment || "-")}-${toPersianNumber(item.code.unit || "-")}`}
            </p>
          </div>

          {/* نوع سازه */}
          <div className="border-t border-[var(--bg-divider)] pt-2">
            <p>
              <span className=" ">نوع سازه:</span> {item.structureType}
            </p>
          </div>

          {/* پایان کار */}
          <div className="border-t border-[var(--bg-divider)] pt-2">
            <p>
              <span className=" ">پایان کار:</span>{" "}
              {item.hasEndWork
                ? `بله (${toPersianNumber(item.endWorkDate || "-")})`
                : "خیر"}
            </p>
          </div>

          {/* اطلاعات مالک */}
          <div className="border-t border-[var(--bg-divider)] pt-2">
            <p>
              <span className=" ">اطلاعات مالک:</span> {item.owner.firstName}{" "}
              {item.owner.lastName} - {toPersianNumber(item.owner.nationalCode)}{" "}
              - {toPersianNumber(item.owner.phone)}
            </p>
          </div>

          {/* توضیحات اختیاری */}
          {item.description && (
            <div className="border-t border-[var(--bg-divider)] pt-2">
              <p>{item.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormCard;
