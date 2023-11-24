import React from "react";
import PropTypes from "prop-types";

const NotificationSlice = ({ photo, name, message, onAccept }) => {
  return (
    <div className="NotificationSlice p-4  rounded  text-white">
      <div className="flex items-center">
        <img
          src={photo}
          alt={name}
          className="NotificationSlice-photo mr-2 w-8 h-8 rounded-full"
        />
        <div className="w-full">
        <div className="flex justify-between w-full">
          <div className="">
            <div className="NotificationSlice-name font-bold">{name}</div>
            <div className="NotificationSlice-message">{message}</div>
          </div>
          {onAccept && (
            <div className="flex justify-between  ">
            <button
              className="m-1 border-2 border-gray-800 text-white px-2 py-1 rounded"
              onClick={onAccept}
            >
              Confirm
            </button>
            <button
            className="m-1 border-2 border-gray-800 text-white px-2 py-1 rounded"
            
          >
            Hide
          </button>
          </div>
          )}
          
        </div>
        <hr className="mt-4 bg-gray-800 border-none h-[1px]"/>
        </div>
      </div>
        
    </div>
  );
};

NotificationSlice.propTypes = {
  photo: PropTypes.string.isRequired, // URL for the photo
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onAccept: PropTypes.func, // Callback for accepting follow requests
};

export default NotificationSlice;
