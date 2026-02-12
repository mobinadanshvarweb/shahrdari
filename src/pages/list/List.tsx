import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";

const List = () => {
  const data = useSelector((state: RootState) => state.form.data);

  return (
    <div className="flex flex-col min-h-screen p-4 sm:p-6 bg-[var(--bg)] text-[var(--text)]">
      {/* محتوا */}
      {data.length === 0 ? (
        <p className="text-center text-gray-500 mt-20">
          هیچ اطلاعاتی ثبت نشده است
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-[var(--bg)] text-[var(--text)] rounded-2xl p-4 shadow-[8px_8px_16px_rgba(0,0,0,0.2),_-8px_-8px_16px_rgba(255,255,255,0.05)] transition-transform duration-200 hover:scale-[1.02]"
            >
              {/* کد ملک */}
              <p className="font-bold mb-2 text-sm sm:text-base">
                کد ملک: {item.code.region}-{item.code.neighborhood}-
                {item.code.block}-{item.code.property}-{item.code.building}-
                {item.code.apartment}-{item.code.unit}
              </p>

              {/* نوع سازه */}
              <p className="mb-1 text-sm sm:text-base">
                نوع سازه: {item.structureType || "-"}
              </p>

              {/* مالک */}
              <p className="mb-1 text-sm sm:text-base">
                مالک: {item.owner.firstName} {item.owner.lastName}
              </p>

              {/* تاریخ ثبت */}
              <p className="mb-1 text-sm sm:text-base">
                تاریخ ثبت:{" "}
                {item.createdAt
                  ? new Date(item.createdAt).toLocaleDateString("fa-IR")
                  : "-"}
              </p>

              {/* توضیحات اختیاری */}
              {item.description && (
                <p className="mt-2 text-sm sm:text-base">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default List;
