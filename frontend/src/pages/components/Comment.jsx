import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { IoIosShareAlt } from "react-icons/io";


const Comment = ({ userPhoto, userName, comment }) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);
  const [reposts, setReposts] = useState(0);

  const handleLike = () => {
    setLikes(!likes);
  };

  const handleComment = () => {
    setComments(!comments);
  };

  const handleRepost = () => {
    setReposts(!reposts);
  };

  return (
    <div className="comment-section bg-inherit p-4 rounded-md mb-4">
      <div className="flex items-center mb-2">
        <img src={userPhoto} alt={`${userName}'s profile`} className="w-8 h-8 rounded-full mr-2" />
        <span className=" text-white">{userName}</span>
      </div>
      <div className="ml-8">
      <p className="text-gray-800 mb-4 text-white">{comment}</p>
      <div className="flex space-x-4">
        <button className="text-blue-500" onClick={handleLike}>
          
           {likes==0?<FaRegHeart className="text-white"/>:<FaHeart className="text-red-500"/>}
        </button>
        <button className="text-blue-500" onClick={handleComment}>
        <FaRegComment className="text-white "/>
        </button>
        <button className="text-blue-500" onClick={handleRepost}>
          <BiRepost className="text-white text-xl"/>
        </button>
        <button className="text-blue-500">
            <IoIosShareAlt className="text-white text-xl"/>
        </button>
      </div>
      </div>
    </div>
  );
};

export default Comment;
