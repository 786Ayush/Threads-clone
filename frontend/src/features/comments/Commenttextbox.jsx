// PostForm.js
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCommentAsync, selectcreatecomments } from "./commentSlice";
import { selectUserData, token } from "../user/userSlice";

const PostForm = ({ username, imageUrl, postId }) => {
  // {username,imageurl,postid}
  // console.log({ username, imageUrl, postId });
  const [Text, setText] = useState("");
  const [posted, setposted] = useState(false);
  const user = useSelector(selectUserData);
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
  }, [Text]);
  const usertoken = useSelector(token);
  const dispatch = useDispatch();
  const handlePost = () => {
    if (Text === "") return;
    dispatch(
      createCommentAsync({
        token: usertoken,
        postId: postId,
        content: Text,
        username: username,
        imageUrl: user.imageURL,
      })
    );
    setposted(true);
  };
  const createcomment = useSelector(selectcreatecomments);
  // console.log(createcomment);
  return (
    <div className="flex justify-around max-w-md mx-auto  p-4 rounded shadow">
      <div className="w-full b-2">
        <textarea
          value={Text}
          onChange={handleTextChange}
          ref={textareaRef}
          className="p-2 border outline-none focus:outline-none overflow-hidden resize-none w-full bg-inherit text-white border-none"
          //  style={{width:100%}}
          placeholder="Start the comment..."
        />
      </div>
      <button
        className="px-5 py-0 bg-zinc-800 text-white rounded-3xl hover:bg-zinc-900"
        onClick={handlePost}
      >
        {posted ? "Posted" : "Post"}
      </button>
    </div>
  );
};

export default PostForm;
