import { FiEdit2 } from "react-icons/fi";
import avatar from "../assets/images/avatar.jpg";
import coverImage from "../assets/images/thumbnail.jpg";

function Profile() {
  return (
    <>
      <div className="avatarAndCoverImage w-full relative h-fit border-b-[3px] border-white mb-4">
        <img
          src={coverImage}
          alt="coverImage"
          className="h-40 sm:h-52 md:h-64 w-full bg-transparent"
        />
        <img
          src={avatar}
          alt="avatar"
          className="absolute z-10 left-[2%] top-1/3 w-36 sm:w-44 md:w-52 aspect-square rounded-full border-2"
        />
      </div>
      <div className="userDetail relative p-2 pt-4 sm:p-4 md:p-6 text-lg sm:text-xl flex flex-col max-w-96">
        <span className="text-3xl sm:text-4xl">Adarsh Tiwari</span>
        <span className="font-[300]">at.wrath</span>
        <span className="font-[300]">at.wrath9616@gmail.com</span>
        <button className="p-2 absolute right-1 text-white bg-[#ffffff14] rounded-full border border-white hover:bg-[#] flex items-center justify-center gap-1 text-base">
          <FiEdit2 />
        </button>
        <div></div>
      </div>
    </>
  );
}

export default Profile;
