import { NavLink } from "react-router-dom";
import "./ActiveLink.css";

const ActiveLink = ({ to, children }) => {
  return (
    <div className="mr-4 px-[16px] py-[12px] rounded-[6px] bg-gradient-to-r from-[#7E90FE] to-[#9873FF] ">
      <NavLink to={to} className={({ isActive }) => (isActive ? "active" : "")}>
        {children}
      </NavLink>
    </div>
  );
};

export default ActiveLink;
