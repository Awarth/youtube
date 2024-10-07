import { FiEdit2 } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

function ProfileEditPopUp() {
  return (
    <>
      <div className="border relative border-white p-10 flex flex-col gap-5 rounded-md bg-[#191919]">
        <button className="absolute top-2 right-2 rounded-full  border border-white bg-[#ffffff14] p-1 text-xl text-white duration-300 transition-all ease-in-out hover:scale-105">
          <IoMdClose />
        </button>
        <div className="relative w-full cursor-pointer">
          <button className="w-full py-2 px-4 flex  items-center overflow-hidden border border-[#ECDBBA] bg-transparent gap-1 rounded transition-all duration-300 ease-in-out hover:scale-105 before:rounded before:absolute before:top-0 before:right-full before:w-0 before:h-full before:transition-all before:bg-gradient-to-r before:bg-[#C84B31] before:duration-300 before:ease-in-out before:z-[-1] hover:before:right-0 hover:before:w-full">
            <FiEdit2 />
            Edit Profile
          </button>
        </div>
        <div className="relative w-full cursor-pointer">
          <button className="w-full py-2 px-4 flex  items-center overflow-hidden border border-[#ECDBBA] bg-transparent gap-1 rounded transition-all duration-300 ease-in-out hover:scale-105 before:rounded before:absolute before:top-0 before:right-full before:w-0 before:h-full before:transition-all before:bg-gradient-to-r before:bg-[#C84B31] before:duration-300 before:ease-in-out before:z-[-1] hover:before:right-0 hover:before:w-full">
            <FiEdit2 />
            Change Avatar
          </button>
        </div>
        <div className="relative w-full cursor-pointer">
          <button className="w-full py-2 px-4 flex  items-center overflow-hidden border border-[#ECDBBA] bg-transparent gap-1 rounded transition-all duration-300 ease-in-out hover:scale-105 before:rounded before:absolute before:top-0 before:right-full before:w-0 before:h-full before:transition-all before:bg-gradient-to-r before:bg-[#C84B31] before:duration-300 before:ease-in-out before:z-[-1] hover:before:right-0 hover:before:w-full">
            <FiEdit2 />
            Change Thumbnail
          </button>
        </div>
        <div className="relative w-full cursor-pointer">
          <button className="w-full py-2 px-4 flex  items-center overflow-hidden border border-[#ECDBBA] bg-transparent gap-1 rounded transition-all duration-300 ease-in-out hover:scale-105 before:rounded before:absolute before:top-0 before:right-full before:w-0 before:h-full before:transition-all before:bg-gradient-to-r before:bg-[#C84B31] before:duration-300 before:ease-in-out before:z-[-1] hover:before:right-0 hover:before:w-full">
            <FiEdit2 />
            Change Password
          </button>
        </div>
      </div>
    </>
  );
}

export default ProfileEditPopUp;
