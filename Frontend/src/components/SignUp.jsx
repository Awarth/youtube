import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { PiEyeLight, PiEyeSlash } from "react-icons/pi";
import { NavLink } from "react-router-dom";

function SignUp() {
  const [text1, setText1] = useState(false);
  const [text2, setText2] = useState(false);
  const [error, setError] = useState(false);
  const [next, setNextPage] = useState(false);
  const [userDetail, setUserDetail] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    avatar: null,
    coverImage: null,
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetail((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setUserDetail((prev) => ({
      ...prev,
      [name]: files[0],
    }));
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&]{10,}$/;

    if (!passwordRegex.test(userDetail.password)) {
      setError("Password is not strong enough");
    } else if (userDetail.password !== confirmPassword) {
      setError("Both password should match");
    } else {
      setError("");
      console.log(userDetail);

      // Simulate successful form submission
      alert("Form submitted successfully");

      // Reset the form
      setUserDetail({
        fullName: "",
        username: "",
        email: "",
        password: "",
        avatar: null,
        coverImage: null,
      });
      setConfirmPassword("");
      setText1(false);
      setText2(false);

      // Optionally, if using a file input ref, reset the file input fields manually
      document.getElementById("avatar").value = "";
      document.getElementById("coverImage").value = "";
    }
  };

  return (
    <div className="max-w-[33rem] w-full main flex flex-col bg-[#191919] border border-[#ECDBBA] text-[#ECDBBA] px-8 py-6 rounded-xl">
      <h2 className="text-4xl text-center">Sign Up</h2>
      <form onSubmit={handleSignUp} className="text-lg flex flex-col">
        {!next ? (
          <>
            <label htmlFor="fullName" className="">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              required={true}
              value={userDetail.fullName}
              onChange={handleInputChange}
              className="w-full border border-[#ECDBBA] px-2 py-1 bg-transparent rounded"
            />
            <label htmlFor="username" className="">
              Username
            </label>
            <input
              type="text"
              name="username"
              required={true}
              value={userDetail.username}
              onChange={handleInputChange}
              className="w-full border border-[#ECDBBA] px-2 py-1  bg-transparent rounded"
            />
            <label htmlFor="email" className="">
              Email
            </label>
            <input
              type="email"
              name="email"
              required={true}
              value={userDetail.email}
              onChange={handleInputChange}
              className="w-full border border-[#ECDBBA] px-2 py-1  bg-transparent rounded"
            />
            <label htmlFor="password">Password</label>
            <div className="w-full flex justify-between items-center border border-[#ECDBBA] text-[#ECDBBA] rounded overflow-hidden">
              <input
                name="password"
                type={text1 ? `text` : `password`}
                required={true}
                value={userDetail.password}
                onChange={handleInputChange}
                className="w-full bg-transparent border-none text-[#ECDBBA] px-2 py-1 outline-none"
              />
              <span onClick={() => setText1(!text1)} className="text-2xl mx-1">
                {text1 ? <PiEyeSlash /> : <PiEyeLight />}
              </span>
            </div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="w-full flex justify-between items-center border border-[#ECDBBA] text-[#ECDBBA] rounded overflow-hidden mb-2">
              <input
                name="confirmPassword"
                type={text2 ? `text` : `password`}
                required={true}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-transparent border-none text-[#ECDBBA] px-2 py-1 outline-none"
              />
              <span onClick={() => setText2(!text2)} className="text-2xl mx-1">
                {text2 ? <PiEyeSlash /> : <PiEyeLight />}
              </span>
            </div>
            <p
              className={`text-red-500 text-center text-sm ${
                error ? "block" : "hidden"
              } `}
            >
              {error ? error : ""}
            </p>
            <span className="text-sm font-extralight">
              Password must include
              <ul className="list-disc list-inside">
                <li>password must be 10 char long</li>
                <li>1 symbol [@,$,!,%,*,?,&,_]</li>
                <li>1 uppercase letter [A-Z]</li>
                <li>1 number [0-9]</li>
                <li>lowercase letters [a-z]</li>
              </ul>
            </span>
            <p className="text-base font-light mb-1">
              Already have a account?{" "}
              <NavLink
                to="/login"
                className="text-[#bd5c49] underline font-medium "
              >
                Login
              </NavLink>{" "}
            </p>
            <div className="relative w-full cursor-pointer">
              <div
                onClick={() => setNextPage(true)}
                className="w-full py-2 px-4 flex justify-center items-center overflow-hidden border border-[#ECDBBA] bg-transparent gap-1 rounded transition-all duration-300 ease-in-out hover:scale-105 before:rounded before:absolute before:top-0 before:right-full before:w-0 before:h-full before:transition-all before:bg-gradient-to-r before:bg-[#C84B31] before:duration-300 before:ease-in-out before:z-[-1] hover:before:right-0 hover:before:w-full"
              >
                Next
              </div>
            </div>
          </>
        ) : (
          <>
            <div
              className="flex justify-center items-center gap-1 w-fit border border-white text-white rounded-md cursor-pointer px-2 py-1 text-xs md:text-sm mb-2"
              onClick={() => setNextPage(false)}
            >
              <FaArrowLeft />
              Back
            </div>
            <label htmlFor="avatar">Avatar</label>
            <input
              type="file"
              name="avatar"
              id="avatar"
              accept="image/*"
              required={true}
              onChange={handleFileChange}
              className="w-full p-1 border border-white rounded bg-[#ffffff10] mb-2 cursor-pointer"
            />
            <label htmlFor="coverImage">Cover Image</label>
            <input
              type="file"
              name="coverImage"
              id="coverImage"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full p-1 border border-white rounded bg-[#ffffff10] cursor-pointer mb-4"
            />
            <p
              className={`text-red-500 text-center text-sm mb-4 ${
                error ? "block" : "hidden"
              } `}
            >
              {error ? error : ""}
            </p>
            <div className="relative w-full cursor-pointer">
              <button
                type="submit"
                onClick={() => setNextPage(true)}
                className="w-full py-2 px-4 flex justify-center items-center overflow-hidden border border-[#ECDBBA] bg-transparent gap-1 rounded transition-all duration-300 ease-in-out hover:scale-105 before:rounded before:absolute before:top-0 before:right-full before:w-0 before:h-full before:transition-all before:bg-gradient-to-r before:bg-[#C84B31] before:duration-300 before:ease-in-out before:z-[-1] hover:before:right-0 hover:before:w-full"
              >
                Save
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

export default SignUp;
