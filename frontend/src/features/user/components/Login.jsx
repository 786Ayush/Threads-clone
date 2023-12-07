import bg from "../../../assests/loginbackground.png";
import icon from "../../../assests/icon.svg";
import { Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  LoginAsync,
  checkUserAsync,
  selectUserData,
  token,
} from "../userSlice";
export function Login() {
  const userData = useSelector(selectUserData);
  const userToken = useSelector(token);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [stay, move] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log({ userName, password });

    await dispatch(
      LoginAsync({
        username: userName,
        password: password,
      })
    );

    // console.log(userData);
    // console.log(userToken);
  };
  useEffect(() => {
    if (userData && userData.token) move(true);
  }, [userData]);

  // Retrieve the token from localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");

    if (storedToken) {
      // Token exists in localStorage, you can use it for authentication or other purposes
      dispatch(checkUserAsync(storedToken));
      move(true);
    } else {
      move(false);
      // Token doesn't exist in localStorage
      console.log("No token found");
    }
  }, []);

  return (
    <>
      {userData && userData.token && stay ? (
        <Navigate to="/" replace={true}></Navigate>
      ) : null}
      <div>
        <img src={bg} alt="" className="absolute  hidden md:block w-full" />
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
                  Login to your Threads Account.
                </p>
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="bg-inputColor text-white text-sm py-3 w-full border-none rounded-md px-3 mt-1 focus:outline-white "
                  placeholder="Username"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="bg-inputColor text-white text-sm w-full border-none mt-0 rounded-sm py-3 px-3 focus:outline-whit focus:border-1 mb-[5px]"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="text-red-700">
                  {userData && userData.error
                    ? "*Invalid username and password"
                    : null}
                </div>
                <button
                  type="submit"
                  className="w-full mt-1 p-3 bg-white text-black rounded-md"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="flex">
              <p className="text-white text-sm mx-auto">
                Don't have an Account?
                <Link to="/signup" className="text-blue-400">
                  {" "}
                  Signup{" "}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
