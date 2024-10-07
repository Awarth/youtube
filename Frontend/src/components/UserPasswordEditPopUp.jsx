import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { PiEyeLight, PiEyeSlash } from "react-icons/pi";
function UserPasswordEditPopUp() {
  const [text, setText] = useState(false);
  const [error, setError] = useState(false);

  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handlePasswordInput = (e) => {
    const { name, value } = e.target;

    setPassword((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&]{10,}$/;

    if (!passwordRegex.test(password.newPassword)) {
      setError("Password must is not strong enough");
    } else if (password.newPassword !== password.confirmPassword) {
      setError("New password and Confirm password does not match");
    } else {
      setError("");
      console.log(password);
      // make a patch request to change password
    }
  };
  return (
    <>
      <div className="changeProfile max-w-96 w-full relative border bg-[#191919] rounded p-8">
        <button className="absolute top-2 right-2 rounded-full  border border-white bg-[#ffffff14] p-1 text-xl text-white duration-300 transition-all ease-in-out hover:scale-105">
          <IoMdClose />
        </button>
        <h2 className="text-center text-3xl mb-2">Change Profile</h2>
        <form className="w-full flex flex-col" onSubmit={handlePasswordChange}>
          <label htmlFor="oldPasswords" className="mb-1">
            Old Password
          </label>
          <input
            name="oldPassword"
            type="text"
            required={true}
            value={password.oldPassword}
            onChange={handlePasswordInput}
            className="bg-transparent outline-none px-2 py-1 border border-[#ECDBBA] rounded mb-2"
          />
          <label htmlFor="newPassword" className="mb-1">
            New Password
          </label>
          <div className="flex justify-between items-center border border-[#ECDBBA] text-[#ECDBBA] rounded overflow-hidden mb-4">
            <input
              name="newPassword"
              type={text ? `text` : `password`}
              required={true}
              value={password.newPassword}
              onChange={handlePasswordInput}
              className="bg-transparent border-none text-[#ECDBBA] px-2 py-1 outline-none"
            />
            <span onClick={() => setText(!text)} className="text-2xl mx-1">
              {text ? <PiEyeSlash /> : <PiEyeLight />}
            </span>
          </div>
          <label htmlFor="confirmPassword" className="mb-1">
            Confirm Password
          </label>
          <input
            name="confirmPassword"
            type="password"
            required={true}
            value={password.confirmPassword}
            onChange={handlePasswordInput}
            className="bg-transparent border border-[#ECDBBA] text-[#ECDBBA] px-2 py-1 rounded mb-4"
          />
          <span className="text-sm font-extralight">
            New password must include
            <ul className="list-disc list-inside">
              <li>password must be 10 char long</li>
              <li>1 symbol [@,$,!,%,*,?,&,_]</li>
              <li>1 uppercase letter [A-Z]</li>
              <li>1 number [0-9]</li>
              <li>lowercase letters [a-z]</li>
            </ul>
          </span>
          <p className="text-red-500 text-center text-sm mb-4">
            {error ? error : ""}
          </p>
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

export default UserPasswordEditPopUp;
