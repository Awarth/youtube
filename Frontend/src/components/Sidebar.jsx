import { FiHome } from "react-icons/fi";
import { BiLike } from "react-icons/bi";
import { BiHistory } from "react-icons/bi";
import { LiaPhotoVideoSolid } from "react-icons/lia";
import { IoFolderOpenOutline } from "react-icons/io5";
import { FiUserCheck } from "react-icons/fi";
import { MdOutlineFileUpload } from "react-icons/md";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import avatar from "../assets/images/avatar.jpg";
import { IoIosLogIn, IoIosLogOut } from "react-icons/io";
import { useState } from "react";

function Sidebar({ className }) {
  const [login, setLogin] = useState(true);

  return (
    <>
      <aside
        className={`border-r border-[#ECDBBA] w-auto lg:w-72 p-2 sm:p-2 ${className} bg-[#191919]`}
      >
        <div className="h-full px-1 py-1 lg:p-4 text-[#ECDBBA] text-2xl lg:text-xl flex flex-col justify-between">
          <div className="controls flex flex-col gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center border border-[#ECDBBA] gap-0 lg:gap-1 p-2 rounded lg:px-3 lg:py-1 cursor-pointer transition-all duration-300 ease-in ${
                  isActive ? "bg-[#C84B31]" : "hover:bg-[#C84B31]"
                }`
              }
            >
              <FiHome />
              <p className="max-lg:hidden">Home</p>
            </NavLink>

            <NavLink
              to="/liked-videos"
              className={({ isActive }) =>
                `flex items-center border border-[#ECDBBA] gap-0 lg:gap-1 p-2 rounded lg:px-3 lg:py-1 cursor-pointer transition-all duration-300 ease-in ${
                  isActive ? "bg-[#C84B31]" : "hover:bg-[#C84B31]"
                }`
              }
            >
              <BiLike />
              <p className="max-lg:hidden">Liked Videos</p>
            </NavLink>

            <NavLink
              to="/history"
              className={({ isActive }) =>
                `flex items-center border border-[#ECDBBA] gap-0 lg:gap-1 p-2 rounded lg:px-3 lg:py-1 cursor-pointer transition-all duration-300 ease-in ${
                  isActive ? "bg-[#C84B31]" : "hover:bg-[#C84B31]"
                }`
              }
            >
              <BiHistory />
              <p className="max-lg:hidden">History</p>
            </NavLink>

            <NavLink
              to="/my-content"
              className={({ isActive }) =>
                `flex items-center border border-[#ECDBBA] gap-0 lg:gap-1 p-2 rounded lg:px-3 lg:py-1 cursor-pointer transition-all duration-300 ease-in ${
                  isActive ? "bg-[#C84B31]" : "hover:bg-[#C84B31]"
                }`
              }
            >
              <LiaPhotoVideoSolid />
              <p className="max-lg:hidden">My Content</p>
            </NavLink>

            <NavLink
              to="/collections"
              className={({ isActive }) =>
                `flex items-center border border-[#ECDBBA] gap-0 lg:gap-1 p-2 rounded lg:px-3 lg:py-1 cursor-pointer transition-all duration-300 ease-in ${
                  isActive ? "bg-[#C84B31]" : "hover:bg-[#C84B31]"
                }`
              }
            >
              <IoFolderOpenOutline />
              <p className="max-lg:hidden">Collections</p>
            </NavLink>
            <NavLink
              to="/subscriptions"
              className={({ isActive }) =>
                `flex items-center border border-[#ECDBBA] gap-0 lg:gap-1 p-2 rounded lg:px-3 lg:py-1 cursor-pointer transition-all duration-300 ease-in ${
                  isActive ? "bg-[#C84B31]" : "hover:bg-[#C84B31]"
                }`
              }
            >
              <FiUserCheck />
              <p className="max-lg:hidden">Subscriptions</p>
            </NavLink>
            <NavLink
              to="/upload"
              className={({ isActive }) =>
                `flex items-center border border-[#ECDBBA] gap-0 lg:gap-1 p-2 rounded lg:px-3 lg:py-1 cursor-pointer transition-all duration-300 ease-in ${
                  isActive ? "bg-[#C84B31]" : "hover:bg-[#C84B31]"
                }`
              }
            >
              <MdOutlineFileUpload />
              <p className="max-lg:hidden">Upload</p>
            </NavLink>
          </div>
          <div className="flex flex-col gap-4">
            {login ? (
              <NavLink
                to="/sign-up"
                className={({ isActive }) =>
                  `flex items-center border border-[#ECDBBA] gap-0 lg:gap-1 p-2 rounded lg:px-3 lg:py-1 cursor-pointer transition-all duration-300 ease-in ${
                    isActive ? "bg-[#C84B31]" : "hover:bg-[#C84B31]"
                  }`
                }
              >
                <IoIosLogOut />
                <p className="max-lg:hidden">Logout</p>
              </NavLink>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `flex items-center border border-[#ECDBBA] gap-0 lg:gap-1 p-2 rounded lg:px-3 lg:py-1 cursor-pointer transition-all duration-300 ease-in ${
                    isActive ? "bg-[#C84B31]" : "hover:bg-[#C84B31]"
                  }`
                }
              >
                <IoIosLogIn />
                <p className="max-lg:hidden">Login</p>
              </NavLink>
            )}
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `flex w-full items-center border border-[#ECDBBA] gap-0 lg:gap-1 p-1 rounded lg:px-3 lg:py-1 cursor-pointer transition-all duration-300 ease-in ${
                  isActive ? "bg-[#C84B31]" : "hover:bg-[#C84B31]"
                }`
              }
            >
              <img
                src={avatar}
                alt="avatar"
                className="rounded-full w-8 aspect-square border border-[#ECDBBA]"
              />
              <p className="text-lg max-lg:hidden">Adarsh</p>
            </NavLink>
          </div>
        </div>
      </aside>
    </>
  );
}

Sidebar.propTypes = {
  className: PropTypes.string,
};

export default Sidebar;
