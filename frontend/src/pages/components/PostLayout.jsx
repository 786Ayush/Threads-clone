import React from "react";
import heart from "../../assests/heartwb.svg";
import share from "../../assests/sharew.svg";
import repost from "../../assests/repostw.svg";
import comment from "../../assests/commentw.svg";

const PostLayout = (props) => {
  const { firstName, icon, content, contentType, replies, likes } = props.data;

  return (
    <div className="max-w-md mx-auto  rounded-xl overflow-hidden shadow-md text-white ">
      <div className="flex justify-between items-center p-4  text-white">
        <div className="flex items-center">
          <img
            src={icon}
            alt="user-icon"
            className="w-8 h-8 rounded-full mr-2"
          />
          <span className="font-bold">{firstName}</span>
        </div>
        <div className="dots">...</div>
      </div>
      <div className="p-4 border-l-2 border-gray-600">
        <p className="text-white">{content}</p>

        {contentType === "photo" && (
          <img src={content} alt="post-photo" className="rounded-lg mt-4 " />
        )}
        {contentType === "video" && (
          <video controls className="rounded-lg mt-4">
            <source src={content} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      &nbsp;&nbsp;
      <div className="flex items-center space-x-1 ">
          <button className="flex items-center space-x-1 hover:bg-gray-800 p-2 hover:rounded-full">
            <img src={heart} alt="like" width="20" height="20" />
            
          </button>
          <button className="flex items-center space-x-1 hover:bg-gray-800 p-2 hover:rounded-full">
          <img src={comment} alt="like" width="20" height="20"/>
          </button>
          <button className="flex items-center space-x-1 hover:bg-gray-800 p-2 hover:rounded-full">
          <img src={repost} alt="like" width="20" height="20"/>
          </button>
          <button className="flex items-center space-x-1 hover:bg-gray-800 p-2 hover:rounded-full">
          <img src={share} alt="like" width="20" height="20"/>
          </button>
        </div>
      
      <div className="flex  p-4  text-gray-500">
        <div className="flex items-center">
          <span>{replies}</span>&nbsp; replies
        </div>
        &nbsp;
        <div className="flex items-center">
          <span>{likes}</span>&nbsp; Likes
        </div>
      </div>
      <div className="text-grey">
        <hr />
      </div>
    </div>
  );
};

export default PostLayout;
