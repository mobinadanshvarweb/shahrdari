import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store/store";
import { toggleDarkMode } from "../redux/slice/darkModeSlice";

const DarkMode = () => {
  const dispatch = useDispatch();
  const dark = useSelector((state: RootState) => state.darkMode.dark);
  return (
    <button
      onClick={() => dispatch(toggleDarkMode())}
      className={`
        relative flex items-center rounded-full p-0.5
        w-12 h-6 sm:w-14 sm:h-7 md:w-16 md:h-8
        transition-colors duration-300 shadow-[inset_0_2px_8px_rgba(0,0,0,0.15)]
      `}
    >
      {/* Thumb */}
      <div
        className={`
          absolute top-0 left-0 w-1/2 h-full rounded-full
          flex items-center justify-center text-sm
          transition-transform duration-300 transform
          ${dark ? "translate-x-full bg-gray-800 text-yellow-400 shadow-inner" : "translate-x-0 bg-gray-100 text-yellow-500 shadow-md"}
        `}
      >
        {dark ? "🌙" : "☀️"}
      </div>
    </button>
  );
};

export default DarkMode;
