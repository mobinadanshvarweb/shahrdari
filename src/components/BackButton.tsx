import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
const BackButton = () => {
  return (
    <Link
      to={"/"}
      className="flex items-center gap-2 px-4 py-2 rounded-lg 
                    
                     backdrop-blur-md shadow-md border border-white/20
                     transition hover:scale-[1.02]"
    >
      <IoIosArrowBack />
      بازگشت
    </Link>
  );
};

export default BackButton;
