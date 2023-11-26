import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useRef } from "react";
import { TbPhotoVideo } from "react-icons/tb";

const Createbar = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handlePost = () => {
    // Handle logic for posting the new thread
    console.log("New thread posted!");
    // Close the pop-up after posting
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
    const selectedFile = event.target.files[0];

    // You can check the file type here
    const fileType = selectedFile.type.split("/")[0]; // 'image' or 'video'

    console.log("Selected file:", selectedFile);
    console.log("File type:", fileType);

    // You can perform additional logic, such as uploading the file
  };

  const [text, setText] = useState("");
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
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d364921d-105f-4998-a93f-b7aeb2ca8e68/df88ssd-1bdcaeb2-0202-4f7c-9b07-0cdebb64cc90.jpg/v1/fill/w_894,h_894,q_70,strp/zoro_icon_by_lucaesposito06_df88ssd-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYzMiIsInBhdGgiOiJcL2ZcL2QzNjQ5MjFkLTEwNWYtNDk5OC1hOTNmLWI3YWViMmNhOGU2OFwvZGY4OHNzZC0xYmRjYWViMi0wMjAyLTRmN2MtOWIwNy0wY2RlYmI2NGNjOTAuanBnIiwid2lkdGgiOiI8PTE2MzIifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.WFpjXupIOFWcCHxMEDSD8UHFMrmZJcP2MS5x6IbKxAM"
            alt="User Icon"
            className="w-10 h-10 rounded-full mr-4"
          />
          {/* User Name */}
          <div className="flex flex-col w-full">
            <span className="font-bold text-white">John Doe</span>
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
