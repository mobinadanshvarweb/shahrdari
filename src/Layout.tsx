import { Outlet } from "react-router-dom";
import BackButton from "./components/BackButton";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-(--bg) text-(--text) transition-colors duration-300">
      {/* Header */}
      <header className="flex justify-between items-center p-4   ">
        <BackButton />
      </header>
      {/* Main */}
      <main className="flex-1 flex flex-col items-center justify-center  p-4 text-center text-base sm:text-lg md:text-xl">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
