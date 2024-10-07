import { IoMdClose } from "react-icons/io";

function UserDetailsEditPopUp() {
  return (
    <>
      <div className="changeProfile max-w-96 w-full relative border bg-[#191919] rounded p-8">
        <button className="absolute top-2 right-2 rounded-full  border border-white bg-[#ffffff14] p-1 text-xl text-white duration-300 transition-all ease-in-out hover:scale-105">
          <IoMdClose />
        </button>
        <h2 className="text-center text-3xl mb-2">Change Profile</h2>
        <form
          className="w-full flex flex-col"
          //   onSubmit={handleUserDetailsChange}
        >
          <label htmlFor="fullName" className="mb-1">
            Full Name
          </label>
          <input
            name="fullName"
            type="text"
            className="bg-transparent border border-[#ECDBBA] text-[#ECDBBA] px-2 py-1 rounded mb-2"
          />
          <label htmlFor="email" className="mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="bg-transparent border border-[#ECDBBA] text-[#ECDBBA] px-2 py-1 rounded mb-4"
          />
          <div className="relative w-full cursor-pointer">
            <button className="w-full py-2 px-4 flex justify-center items-center overflow-hidden border border-[#ECDBBA] bg-transparent gap-1 rounded transition-all duration-300 ease-in-out hover:scale-105 before:rounded before:absolute before:top-0 before:right-full before:w-0 before:h-full before:transition-all before:bg-gradient-to-r before:bg-[#c84b31] before:duration-300 before:ease-in-out before:z-[-1] hover:before:right-0 hover:before:w-full">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default UserDetailsEditPopUp;
