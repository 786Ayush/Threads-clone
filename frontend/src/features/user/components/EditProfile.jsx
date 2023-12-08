import React, { useEffect, useState } from "react";
// import pic from "../../assests/profile.jpg";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { selectUserData, editProfileAsync, checkUserAsync } from "../userSlice";
import { token } from "../userSlice";

const EditProfile = () => {
  const userToken = useSelector(token);
  const userData = useSelector(selectUserData);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);

  const pic =
    userData.imageURL === ""
      ? "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d364921d-105f-4998-a93f-b7aeb2ca8e68/df88ssd-1bdcaeb2-0202-4f7c-9b07-0cdebb64cc90.jpg/v1/fill/w_894,h_894,q_70,strp/zoro_icon_by_lucaesposito06_df88ssd-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYzMiIsInBhdGgiOiJcL2ZcL2QzNjQ5MjFkLTEwNWYtNDk5OC1hOTNmLWI3YWViMmNhOGU2OFwvZGY4OHNzZC0xYmRjYWViMi0wMjAyLTRmN2MtOWIwNy0wY2RlYmI2NGNjOTAuanBnIiwid2lkdGgiOiI8PTE2MzIifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.WFpjXupIOFWcCHxMEDSD8UHFMrmZJcP2MS5x6IbKxAM"
      : "http://localhost:8080/" + userData.imageURL;
  useEffect(() => {
    setName(userData.name);
    setBio(userData.bio);
  }, []);
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handlePrivateChange = (e) => {
    setIsPrivate(e.target.checked);
  };
  let selectedFile;
  const handleImageChange = (e) => {
    // Handle the selected image file here
    selectedFile = e.target.files[0];
    // You can perform additional logic, such as uploading the image to a server or updating state
  };
  const dispatch = useDispatch();
  const handleSubmit = () => {
    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("bio", bio);
    formdata.append("image", selectedFile);
    dispatch(
      editProfileAsync({
        userData: formdata,
        token: userToken,
        id: userData._id,
      })
    );
    dispatch(checkUserAsync(userData.token));
  };

  return (
    <div className="mb-0 scroll-none">
      <div className="sticky md:hidden top-0 bg-bgColor py-4">
        <div className="flex justify-between px-4">
          <Link to="/profile">
            <button className="text-white focus:outline-none">Cancel</button>
          </Link>
          <Link to="/profile">
            <button className="focus:outline-none text-blue-500">Done</button>
          </Link>
        </div>
      </div>
      <div className="flex items-center mb-0 justify-center h-screen">
        <div className="md:w-[500px] w-[430px] p-6 border border-gray-500 rounded-[20px] shadow-md bg-bgColor text-white">
          <div className="mb-4 flex items-center">
            <div className="mr-4 flex-grow">
              <label className="block mb-1">Name:</label>
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                className="border-b  bg-transparent text-white w-full py-1"
              />
            </div>{" "}
            <div className="relative">
              <label htmlFor="profileImage" className="cursor-pointer relative">
                <img
                  src={pic}
                  alt="Profile"
                  className="w-16 h-16 rounded-full"
                />
                <input
                  type="file"
                  id="profileImage"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
                <div
                  className="absolute bottom-0 right-0 p-1 bg-gray-50 text-zinc-400 rounded-full cursor-pointer"
                  onClick={() => {
                    // Handle the click event for the plus icon
                    // console.log("Add image clicked");
                  }}
                >
                  <FaPlus />
                </div>
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-1">Bio:</label>
            <input
              value={bio}
              onChange={handleBioChange}
              className="border-b border-white bg-transparent text-white w-full py-1"
            />
          </div>
          <div className="mb-4 flex justify-between">
            <label className="flex items-center mr-4">Private Account</label>
            <div>
              <input
                className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-white checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-white checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault02"
                defaultChecked
              />
            </div>
          </div>
          <Link to="/profile">
            <button
              className="bg-white hidden md:block text-black w-full px-4 py-2 rounded-md"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
