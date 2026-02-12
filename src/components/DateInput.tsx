import { forwardRef } from "react";

type Props = {
  placeholder?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const DateInput = forwardRef<HTMLInputElement, Props>(
  ({ placeholder, ...props }, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        type="date"
        placeholder={placeholder}
        className="
          w-full  p-2 rounded-xl
          bg-(--bg) text-(--text)
          shadow-inner
          text-xs
          border border-white/20
          transition duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500
        "
      />
    );
  },
);

export default DateInput;
