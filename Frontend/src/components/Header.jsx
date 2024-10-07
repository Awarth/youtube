import { IoSearch } from "react-icons/io5";
import { PiYoutubeLogoFill } from "react-icons/pi";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
function Header({ className }) {
  return (
    <>
      <header
        className={`w-full bg-[#191919] flex items-center justify-center border-b border-[#ECDBBA] ${className} z-50`}
      >
        <nav className="max-w-[1440px] w-full px-4 py-3 flex items-center justify-between">
          <NavLink to="/" className="logo text-[#C84B31] flex justify-center items-center cursor-pointer">
            <PiYoutubeLogoFill className="text-[#C84B31] text-5xl" />{" "}
            <p className="text-3xl logo-text hidden sm:block">YouTube</p>
          </NavLink>

          <div className="search flex justify-center items-center gap-1 rounded-lg bg-transparent border border-[#ECDBBA] p-1 text-[#ECDBBA]">
            <input
              type="text"
              className=" p-1 outline-none text-xl bg-transparent w-[200px] sm:w-auto"
            />
            <IoSearch className="text-2xl" />
          </div>
        </nav>
      </header>
    </>
  );
}

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
