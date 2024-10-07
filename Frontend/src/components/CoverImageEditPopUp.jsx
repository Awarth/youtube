import { useState } from "react";
import { IoMdClose } from "react-icons/io";

function CoverImageEditPopUp() {
  const [coverImage, setCoverImage] = useState(null);

  const handleCoverImageChange = (e) => {
    const { name, files } = e.target;
    setCoverImage((prev) => ({
      ...prev,
      [name]: files[0],
    }));
  };

  const handleCoverImageUpload = (e) => {
    e.preventDefault();
    console.log(coverImage);
    //make a post request to change cover image
  };

  return (
    <>
      <div className="changeAvatar max-w-96 w-full relative border bg-[#191919] rounded p-8">
        <button className="absolute top-2 right-2 rounded-full  border border-white bg-[#ffffff14] p-1 text-xl text-white duration-300 transition-all ease-in-out hover:scale-105">
          <IoMdClose />
        </button>
        <h2 className="text-center text-3xl mb-2">Change Cover Image</h2>
        <form
          className="w-full flex flex-col"
          onSubmit={handleCoverImageUpload}
        >
          <label htmlFor="coverImage" className="mb-1">
            Cover Image
          </label>
          <input
            type="file"
            name="coverImage"
            accept="image/*"
            className="mb-4 border border-white rounded p-1"
            onChange={handleCoverImageChange}
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

export default CoverImageEditPopUp;
