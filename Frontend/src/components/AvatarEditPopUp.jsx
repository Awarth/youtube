import { useState } from "react";
import { IoMdClose } from "react-icons/io";

function AvatarEditPopUp() {
  const [avatar, setAvatar] = useState(null);

  const handleAvatarChange = (e) => {
    const { name, files } = e.target;
    setAvatar((prev) => ({
      ...prev,
      [name]: files[0],
    }));
  };

  const handleAvatarUpload = (e) => {
    e.preventDefault();
    console.log(avatar);
    //make a post request to change the avatar
  };

  return (
    <>
      <div className="changeAvatar max-w-96 w-full relative border bg-[#191919] rounded p-8">
        <button className="absolute top-2 right-2 rounded-full  border border-white bg-[#ffffff14] p-1 text-xl text-white duration-300 transition-all ease-in-out hover:scale-105">
          <IoMdClose />
        </button>
        <h2 className="text-center text-3xl mb-2">Change Avatar</h2>
        <form className="w-full flex flex-col" onSubmit={handleAvatarUpload}>
          <label htmlFor="avatar" className="mb-1">
            Avatar
          </label>
          <input
            type="file"
            name="avatar"
            accept="image/*"
            className="mb-4 border border-white rounded p-1"
            onChange={handleAvatarChange}
          />
          <div className="relative w-full cursor-pointer">
            <button className="w-full py-2 px-4 flex justify-center items-center overflow-hidden border border-[#ECDBBA] bg-transparent gap-1 rounded transition-all duration-300 ease-in-out hover:scale-105 before:rounded before:absolute before:top-0 before:right-full before:w-0 before:h-full before:transition-all before:bg-gradient-to-r before:bg-[#C84B31] before:duration-300 before:ease-in-out before:z-[-1] hover:before:right-0 hover:before:w-full">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AvatarEditPopUp;
