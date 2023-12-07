import bg from "../../../assests/loginbackground.png";
import icon from "../../../assests/icon.svg";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { SignupAsync, checkUserAsync, selectUserData } from "../userSlice";
import { useDispatch, useSelector } from "react-redux";

export function Signup() {
  const userData = useSelector(selectUserData);
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [er, seter] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPass) {
      seter("Password didn't match with confirm password");
      // console.log({ er });
    } else {
      dispatch(
        SignupAsync({
          username: userName,
          password: password,
        })
      );
    }
  };

  const storedToken = localStorage.getItem("authToken");

  if (storedToken) {
    // Token exists in localStorage, you can use it for authentication or other purposes

    dispatch(checkUserAsync(storedToken));
  } else {
    // Token doesn't exist in localStorage
    // console.log("No token found");
  }

  // color: #1E1E1E
  return (
    <>
      {userData && <Navigate to="/" replace={true}></Navigate>}
      <div>
        <img
          src={bg}
          alt=""
          className="absolute  hidden md:block w-full h-auto"
        />
        <div className="min-h-screen bg-black flex justify-center items-center z-10 relative bg-transparent">
          <div className="bg-black mt-10 p-8 rounded-lg shadow-md w-[400px]">
            <div className="flex">
              <img
                src={icon}
                alt=""
                className="md:hidden mx-auto w-20 h-20 text-white block"
              />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex">
                <p className="text-white font-bold mx-auto">
                  Signup to Threads.
                </p>
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="bg-inputColor text-white text-sm py-3 w-full border-none rounded-md px-3 mt-1 focus:outline-white "
                  placeholder="Username"
                  onChange={(e) => {
                    setuserName(e.target.value);
                  }}
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="bg-inputColor text-white text-sm w-full border-none mt-0 rounded-md py-3 px-3 focus:outline-whit focus:border-1 mb-4"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="bg-inputColor text-white text-sm w-full border-none mt-0 rounded-md py-3 px-3 focus:outline-whit focus:border-1 mb-[5px]"
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPass(e.target.value)}
                />
                {er !== "" && <p className="text-red-500">{er}</p>}
              </div>
              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full mt-1 p-3 bg-white text-black rounded-md"
                >
                  Signup
                </button>
              </div>
            </form>
            <div className="flex">
              <p className="text-white text-sm mx-auto">
                Already have a Account?
                <Link to="/login" className="text-blue-400">
                  {" "}
                  Login{" "}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
