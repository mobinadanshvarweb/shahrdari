import { useEffect, type ReactNode } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store/store";

interface Props {
  children: ReactNode;
}

export default function ThemeProvider({ children }: Props) {
  const dark = useSelector((state: RootState) => state.darkMode.dark);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return <>{children}</>;
}
