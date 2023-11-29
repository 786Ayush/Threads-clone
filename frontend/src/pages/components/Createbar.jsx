import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useRef } from "react";
import { TbPhotoVideo } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { selectUserData, token } from "../../features/user/userSlice";
import { createPostAsync } from "../../features/feeds/feedsSlice";

const Createbar = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);
  const userData = useSelector(selectUserData);
  const userToken = useSelector(token);
  const [userName, setuserName] = useState(userData.name);
  const [profile, setProfile] = useState(
    "http://localhost:8080/" + userData.imageURL
  );
  const [text, setText] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const dispatch = useDispatch();
  const handlePost = () => {
    // Handle logic for posting the new thread
    const formData = new FormData();
    formData.append("content", text);
    formData.append("file", selectedFile);
    formData.append("author", userData._id);
    formData.append("icon", userData.imageURL);
    formData.append("authorName", userName);
    // Close the pop-up after posting
    dispatch(createPostAsync({ userData: formData, token: userToken }));

    setIsOpen(false);
    // Trigger the onClose callback (if provided)
    onClose && onClose();
  };

  const fileInputRef = useRef(null);

  const handleChoose = () => {
    // Trigger the file input click event when the button is clicked
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    // Handle the selected file
    const File = event.target.files[0];
    setSelectedFile(File);
    // console.log("file added")
    // You can check the file type here
    // const fileType = selectedFile.type.split("/")[0]; // 'image' or 'video'

    // console.log("File type:", fileType);

    // You can perform additional logic, such as uploading the file
  };

  const textareaRef = useRef(null);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    // Adjust the height of the textarea based on its content
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset height to auto to calculate the scroll height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [text]);

  return (
    <div className={`new-thread-form ${isOpen ? "open" : "closed"}`}>
      <div className="overlay"></div>
      <h2 className="text-xl font-bold text-white justify-center m-auto w-full flex">
        New Thread
      </h2>
      <div className="popup p-8 bg-bgColor border-2 border-gray-800 rounded-md shadow-md">
        <div className="flex items-center mb-4">
          {/* Photo/Icon */}
          <img
            src={profile}
            alt="User Icon"
            className="w-10 h-10 rounded-full mr-4"
          />
          {/* User Name */}
          <div className="flex flex-col w-full">
            <span className="font-bold text-white">{userName}</span>
            {/* Input Box */}
            <div className="w-full">
              <textarea
                value={text}
                onChange={handleTextChange}
                ref={textareaRef}
                className="p-2 border outline-none focus:outline-none overflow-hidden resize-none w-full bg-inherit text-white border-none"
                //  style={{width:100%}}
                placeholder="Start a thread..."
              />
            </div>
          </div>
        </div>
        {/* Input for Photo/Video */}
        <div className=" border-l-2 border-gray-600 p-4">
          <div>
            {/* Hidden file input */}
            <input
              type="file"
              accept="image/*,video/*" // Allow both image and video files
              onChange={handleFileChange}
              ref={fileInputRef}
              style={{ display: "none" }}
            />

            {/* Image upload button */}
            <button
              className=" text-gray-500 px-4 py-2 rounded flex items-center text-2xl"
              onClick={handleChoose}
            >
              {/* Icon (SVG image) */}
              <TbPhotoVideo />
            </button>
          </div>
        </div>
        {/* Post Button */}
        <div className="w-full flex justify-end">
          {isOpen == true ? (
            <button
              className="bg-white text-inherit text-lg px-4 py-2 rounded-full"
              onClick={handlePost}
            >
              Post
            </button>
          ) : (
            <button
              className="bg-white text-inherit text-lg px-4 py-2 rounded-full"
              onClick={handlePost}
            >
              Posted
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

Createbar.propTypes = {
  onClose: PropTypes.func, // Callback for closing the pop-up
};

export default Createbar;
