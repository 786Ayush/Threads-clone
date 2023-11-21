import bg from "../../../assests/loginbackground.png";
import icon from "../../../assests/icon.svg";
import { Link } from "react-router-dom";
export function Login() {
  // color: #1E1E1E
  return (
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
          <form>
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
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                id="password"
                name="password"
                className="bg-inputColor text-white text-sm w-full border-none mt-0 rounded-sm py-3 px-3 focus:outline-whit focus:border-1 mb-[5px]"
                placeholder="Password"
              />
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
  );
}
