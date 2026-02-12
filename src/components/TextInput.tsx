import { forwardRef } from "react";

type Props = {
  placeholder?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const TextInput = forwardRef<HTMLInputElement, Props>(
  ({ placeholder, ...props }, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        type="text"
        dir="rtl"
        placeholder={placeholder}
        className="
          w-full p-3 rounded-xl
          bg-(--bg) text-(--text)
          shadow-inner
          border border-white/20
          text-xs
          transition duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500
        "
      />
    );
  },
);

export default TextInput;
