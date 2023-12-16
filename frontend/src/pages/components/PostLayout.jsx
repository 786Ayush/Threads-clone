import React, { useEffect, useState } from "react";

import share from "../../assests/sharew.svg";
import repost from "../../assests/repostw.svg";
import comment from "../../assests/commentw.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectlike, updatelikeAsync } from "../../features/feeds/feedsSlice";
import {
  getUserbyIdAsync,
  selectUserData,
  selectgetUserbyid,
  token,
} from "../../features/user/userSlice";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import PostForm from "../../features/comments/Commenttextbox";

const PostLayout = (props) => {
  // console.log(props);
  const dispatch = useDispatch();
  const usertoken = useSelector(token);
  const userData = useSelector(selectUserData);
  const [like, setLike] = useState(false);
  const [writeComment, setWriteComment] = useState(false);
  const { comments, likes } = props.data;
  const [nlike, setnLike] = useState(likes.length);
  const [ncomment, setncomment] = useState(comments.length);
  const imageUrl = props.data.imageUrl ? props.data.imageUrl : null;
  const videoUrl = props.data.videoUrl ? props.data.videoUrl : null;
  const firstName = props.data.authorName;
  const icon = props.data.icon;
  const content = props.data.content;
  const id = props.data.author;
  // console.log(id);
  useEffect(() => {
    likes?.map((id) => {
      if (id === userData._id) {
        setLike(true);
        return true;
      } else setLike(false);
    });
  }, []);
  const handleLike = () => {
    dispatch(
      updatelikeAsync({
        username: userData.username,
        action: like === false ? "like" : "unlike",
        token: usertoken,
        id: props.data._id,
      })
    );
    setLike(!like);
    setnLike(like ? nlike - 1 : nlike + 1);
  };
  const handlecomment = () => {
    setWriteComment(!writeComment);
  };
  return (
    <div className="w-full mx-auto  rounded-xl overflow-hidden shadow-md text-white ">
      <div className="flex justify-between items-center p-4  text-white">
        <div className="flex items-center">
          <img
            src={icon}
            alt="user-icon"
            className="w-8 h-8 rounded-full mr-2"
          />
          <Link to={`/userprofile/${id._id}`}>
            <span className="font-bold">{firstName}</span>
          </Link>
        </div>
        <div className="dots">...</div>
      </div>
      <Link to={`/posts/${props.data._id}`}>
        <div className="p-4 border-l-2 border-gray-600">
          <p className="text-white">{content}</p>

          {imageUrl !== null && (
            <img src={imageUrl} alt="post-photo" className="rounded-lg mt-4 " />
          )}
          {videoUrl !== null && (
            <video controls loop className="rounded-lg mt-4">
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </Link>
      &nbsp;&nbsp;
      <div className="flex items-center space-x-1 ">
        <button
          className="flex items-center space-x-1 hover:bg-gray-800 p-2 hover:rounded-full"
          onClick={handleLike}
        >
          {/* <img src={heart} alt="like" width="20" height="20" /> */}
          {like ? (
            <FaHeart className="w-5 h-5 text-red-700" />
          ) : (
            <FaRegHeart className="w-5 h-5 text-white" />
          )}
        </button>
        <button
          className="flex items-center space-x-1 hover:bg-gray-800 p-2 hover:rounded-full"
          onClick={handlecomment}
        >
          <img src={comment} alt="like" width="20" height="20" />
        </button>
        <button className="flex items-center space-x-1 hover:bg-gray-800 p-2 hover:rounded-full">
          <img src={repost} alt="like" width="20" height="20" />
        </button>
        <button className="flex items-center space-x-1 hover:bg-gray-800 p-2 hover:rounded-full">
          <img src={share} alt="like" width="20" height="20" />
        </button>
      </div>
      <div className="">
        {writeComment ? (
          <PostForm
            imageUrl={props.data.icon}
            postId={props.data._id}
            username={userData.username}
          />
        ) : null}
      </div>
      <Link to={`/posts/${props.data._id}`}>
        <div className="flex  p-4  text-gray-500">
          <div className="flex items-center">
            <span>{nlike}</span> Likes
          </div>
          &nbsp;
          <div className="flex items-center">
            <span>{ncomment}</span> comments
          </div>
        </div>
      </Link>
      <div className="text-grey">
        <hr />
      </div>
    </div>
  );
};

export default PostLayout;
