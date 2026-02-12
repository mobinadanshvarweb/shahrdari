import { forwardRef } from "react";

type Props = {
  placeholder?: string;
  maxLength: number;
} & React.InputHTMLAttributes<HTMLInputElement>;

const NumericInput = forwardRef<HTMLInputElement, Props>(
  ({ placeholder, maxLength, ...props }, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        type="text"
        dir="rtl"
        inputMode="numeric"
        pattern="[0-9]*"
        maxLength={maxLength}
        placeholder={placeholder}
        className="
        text-xs
          w-full py-2 px-1 rounded-xl
          bg-(--bg) text-(--text)
          shadow-inner
          border border-white/20
          text-center
          transition duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500
        "
      />
    );
  },
);

export default NumericInput;
