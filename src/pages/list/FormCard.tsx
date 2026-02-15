import type { FormData } from "../../data/mockData";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FiEdit2 } from "react-icons/fi";
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
    <div className="bg-[var(--bg)] text-[var(--text)] rounded-2xl p-4 shadow-[8px_8px_16px_rgba(0,0,0,0.2),_-8px_-8px_16px_rgba(255,255,255,0.05)]  transition-shadow duration-200">
      {/* هدر کارت */}
      <div
        className="flex  justify-between items-start cursor-pointer gap-2"
        onClick={onToggle}
      >
        <div className="text-xl select-none mt-1">
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        <div className=" flex flex-col items-end">
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
      </div>

      {/* محتوای بازشونده */}
      <div
        className={`overflow-hidden  transition-all duration-300 ease-in-out`}
        style={{
          maxHeight: isOpen ? 500 : 0,
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="mt-2 text-sm sm:text-base space-y-2 ">
          {/* کد ملک */}
          <div className="p-2  flex justify-between rounded-lg shadow-inner bg-[var(--bg)]">
            <p className="flex justify-between w-full">
              {`${toPersianNumber(item.code.region)}-${toPersianNumber(item.code.neighborhood)}-${toPersianNumber(item.code.block)}-${toPersianNumber(item.code.property)}-${toPersianNumber(item.code.building)}-${toPersianNumber(item.code.apartment || "-")}-${toPersianNumber(item.code.unit || "-")}`}
              <span className="">:کد ملک</span>{" "}
            </p>
          </div>

          {/* توضیحات اختیاری */}
          {item.description && (
            <div className="border-t  shadow-inner my-2  border-[var(--bg-divider)] pt-2">
              <p className="flex justify-end items-center">
                {item.description}
                <span>: توضیحات</span>
              </p>
            </div>
          )}
          {/* نوع سازه */}
          <div className="border-t shadow-inner  border-[var(--bg-divider)] pt-2">
            <p className="flex justify-between">
              {item.structureType}
              <span className=" ">: نوع سازه</span>
            </p>
          </div>

          {/* پایان کار */}
          <div className="border-t   shadow-inner border-[var(--bg-divider)] pt-2">
            <p className="w-full flex justify-between">
              {item.hasEndWork
                ? `بله (${toPersianNumber(item.endWorkDate || "-")})`
                : "خیر"}
              <span className=" ">:پایان کار</span>{" "}
            </p>
          </div>

          {/* اطلاعات مالک */}
          <div className=" rounded-b-lg  border-[var(--bg-divider)] pt-2">
            <p className="w-full flex flex-col">
              <span className="flex justify-center rounded-lg shadow-inner items-center w-full border border-white/20 ">
                :اطلاعات مالک
              </span>
              <span className="flex justify-between">
                <span> {toPersianNumber(item.owner.nationalCode)}</span>
                <span>:کدملی</span>
              </span>
              <span className="flex justify-between">
                <span>{toPersianNumber(item.owner.phone)}</span>
                <span>:شماره تماس</span>
              </span>
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center mt-4 rounded border py-2 border-white/20 cursor-pointer">
          <FiEdit2 />
        </div>
      </div>
    </div>
  );
};

export default FormCard;
