import { Link } from "react-router-dom";
import DarkMode from "../../components/DarkMode";
import { MdOutlinePostAdd } from "react-icons/md";
import { PiList } from "react-icons/pi";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col  transition-colors duration-300">
      {/* Dark Mode Toggle بالا */}
      <div className="flex justify-end p-4">
        <DarkMode />
      </div>

      {/* متن مرکزی با متن متحرک پشتش */}
      <main className="flex-1 flex flex-col items-center justify-center text-center relative overflow-hidden">
        {/* متن اصلی */}
        <h1 className="font-nas text-5xl sm:text-6xl md:text-7xl  animate-bounce-text relative z-10">
          سامانه نوسازی شهرداری ورامین
        </h1>

        {/* متن متحرک پشت */}
        <div className="absolute w-full top-1/2 left-0 opacity-20 overflow-hidden">
          <span className="font-nas text-5xl mt-10 md:md-0 sm:text-6xl md:text-7xl  animate-scroll whitespace-nowrap">
            سامانه نوسازی&nbsp;سامانه نوسازی&nbsp;سامانه نوسازی&nbsp;سامانه
            نوسازی
          </span>
        </div>
      </main>

      <footer className="flex justify-around py-2  border-t-2 border-white/20 shadow-inner">
        <div className="w-1/2 flex flex-col justify-center items-center gap-1">
          <Link
            to="/list"
            className=" rounded-mdtransition-colors duration-200"
          >
            مشاهده لیست
          </Link>
          <PiList />
        </div>
        <span className="w-px  border-white/20 shadow-inner"></span>
        <div className="w-1/2 flex flex-col justify-center items-center gap-1">
          <Link
            to="/add"
            className=" rounded-md transition-colors duration-200"
          >
            افزودن اطلاعات
          </Link>
          <MdOutlinePostAdd />
        </div>
      </footer>
    </div>
  );
}
