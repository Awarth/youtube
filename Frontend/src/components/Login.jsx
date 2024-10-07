import { useState } from "react";
import { PiEyeLight, PiEyeSlash } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import axios from "axios";

function Login() {
  const [text, setText] = useState(false);
  const [details, setDetails] = useState({
    username: "",
    password: "",
  });

  // const [userDetails, setUserDetails] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(details);
    const data = {
      username: "adarsh",
      password: "Adarsh@9616",
    };
    console.log(data);

    const sendLoginRequest = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8000/users/register",
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        console.log(response);
      } catch (error) {
        console.log("Error while login :", error);
      }
    };
    sendLoginRequest();
    setDetails({
      username: "",
      password: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="main relative max-w-[26rem] w-full border border-[#ECDBBA] rounded-xl flex flex-col p-8 bg-[#191919]">
      <h2 className="text-4xl text-center mb-4">Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col w-full text-lg">
        <label htmlFor="username" className="mb-2">
          Username
        </label>
        <input
          type="text"
          name="username"
          value={details.username}
          onChange={handleInputChange}
          className="border border-[#ECDBBA] px-2 py-1 bg-transparent rounded font-light mb-4"
        />
        <label htmlFor="password" className="mb-2">
          Password
        </label>
        <div className="flex w-full justify-between items-center border border-[#ECDBBA] rounded mb-2">
          <input
            type={text ? "text" : "password"}
            name="password"
            value={details.password}
            onChange={handleInputChange}
            className=" w-full bg-transparent px-2 py-1 outline-none font-light"
          />
          <p onClick={() => setText(!text)} className="text-3xl px-2">
            {text ? <PiEyeSlash /> : <PiEyeLight />}
          </p>
        </div>
        <p className="text-base font-light mb-4">
          Does not have a account ?{" "}
          <NavLink
            to="/sign-up"
            className="underline font-medium text-[#bd5c49] cursor-pointer"
          >
            Sign up
          </NavLink>
        </p>
        <div className="relative w-full cursor-pointer">
          <button
            type="submit"
            className="w-full py-2 px-4 flex justify-center items-center overflow-hidden border border-[#ECDBBA] bg-transparent gap-1 rounded transition-all duration-300 ease-in-out hover:scale-105 before:rounded before:absolute before:top-0 before:right-full before:w-0 before:h-full before:transition-all before:bg-gradient-to-r before:bg-[#C84B31] before:duration-300 before:ease-in-out before:z-[-1] hover:before:right-0 hover:before:w-full "
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
