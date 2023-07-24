import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  return (
    <nav className="flex justify-between items-center py-[20px] w-10/12 mx-auto ">
      <div className="text-[#1A1919] font-[800] text-[32px]">
        Job<span className="text-[orange]">Lab</span>
      </div>
      <div className="flex font-[500] text-[16px] ">
        <ActiveLink to="/">Home</ActiveLink>
        <ActiveLink to="/statistics">Statistics</ActiveLink>
        <ActiveLink to="/appliedJob">Applied Job</ActiveLink>
        <ActiveLink to="/blog">Blog</ActiveLink>
      </div>
      <Link to="/feature">
        <button className="font-[800] text-[20px] text-[white] px-[26px] py-[19px] rounded-[8px] bg-gradient-to-r from-[#7E90FE] to-[#9873FF] ">
          Star Applying
        </button>
      </Link>
    </nav>
  );
};

export default Header;
