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
  const imageUrl="http://localhost:8080/"+userPhoto;
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
    <div className="comment-section bg-inherit p-4 rounded-md mb-4 ">
      <div className="flex items-center mb-2">
        <img src={imageUrl} alt={`${userName}'s profile`} className="w-8 h-8 rounded-full mr-2" />
        <span className=" text-white">{userName}</span>
      </div>
      <div className="ml-8">
      <p className=" mb-4 text-white">{comment}</p>
      </div>
      <hr/>
    </div>
  );
};

export default Comment;
