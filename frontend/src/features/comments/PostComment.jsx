import React, { useEffect } from "react";
import Navbar from "../../pages/components/Navbar";
import { useParams } from "react-router-dom";
import PostLayout from "../../pages/components/PostLayout";
import Comment from "../../pages/components/Comment";
import { useDispatch, useSelector } from "react-redux";
import { postbyIdAsync, selectpostbyid } from "../feeds/feedsSlice";
import { token } from "../user/userSlice";
import { getcommentbyIdAsync, selectgetCommentbyid } from "./commentSlice";

import PostForm from "./Commenttextbox";

const sampleCommentData = [
  {
    id: 1,
    userPhoto:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d364921d-105f-4998-a93f-b7aeb2ca8e68/df88ssd-1bdcaeb2-0202-4f7c-9b07-0cdebb64cc90.jpg/v1/fill/w_894,h_894,q_70,strp/zoro_icon_by_lucaesposito06_df88ssd-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYzMiIsInBhdGgiOiJcL2ZcL2QzNjQ5MjFkLTEwNWYtNDk5OC1hOTNmLWI3YWViMmNhOGU2OFwvZGY4OHNzZC0xYmRjYWViMi0wMjAyLTRmN2MtOWIwNy0wY2RlYmI2NGNjOTAuanBnIiwid2lkdGgiOiI8PTE2MzIifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.WFpjXupIOFWcCHxMEDSD8UHFMrmZJcP2MS5x6IbKxAM",
    userName: "Alice",
    comment: "This is a great comment from Alice!",
  },
  {
    id: 2,
    userPhoto:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d364921d-105f-4998-a93f-b7aeb2ca8e68/df88ssd-1bdcaeb2-0202-4f7c-9b07-0cdebb64cc90.jpg/v1/fill/w_894,h_894,q_70,strp/zoro_icon_by_lucaesposito06_df88ssd-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYzMiIsInBhdGgiOiJcL2ZcL2QzNjQ5MjFkLTEwNWYtNDk5OC1hOTNmLWI3YWViMmNhOGU2OFwvZGY4OHNzZC0xYmRjYWViMi0wMjAyLTRmN2MtOWIwNy0wY2RlYmI2NGNjOTAuanBnIiwid2lkdGgiOiI8PTE2MzIifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.WFpjXupIOFWcCHxMEDSD8UHFMrmZJcP2MS5x6IbKxAM",
    userName: "Bob",
    comment: "Awesome post! 👍",
  },
  {
    id: 3,
    userPhoto:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d364921d-105f-4998-a93f-b7aeb2ca8e68/df88ssd-1bdcaeb2-0202-4f7c-9b07-0cdebb64cc90.jpg/v1/fill/w_894,h_894,q_70,strp/zoro_icon_by_lucaesposito06_df88ssd-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYzMiIsInBhdGgiOiJcL2ZcL2QzNjQ5MjFkLTEwNWYtNDk5OC1hOTNmLWI3YWViMmNhOGU2OFwvZGY4OHNzZC0xYmRjYWViMi0wMjAyLTRmN2MtOWIwNy0wY2RlYmI2NGNjOTAuanBnIiwid2lkdGgiOiI8PTE2MzIifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.WFpjXupIOFWcCHxMEDSD8UHFMrmZJcP2MS5x6IbKxAM",
    userName: "Charlie",
    comment: "Nice work!",
  },
];

const PostComment = () => {
  const { id } = useParams();
  // console.log(id);
  const usertoken = useSelector(token);
  const dispatch = useDispatch();

  useEffect(() => {
    const func = async () => {
      await dispatch(postbyIdAsync({ id: id, token: usertoken }));
    };
    func();
  }, [dispatch]);
  useEffect(() => {
    dispatch(getcommentbyIdAsync({ id: id, token: usertoken }));
  }, [dispatch]);
  const post = useSelector(selectpostbyid);
  // console.log(post);
  const commentData = useSelector(selectgetCommentbyid);
  // console.log(commentData);
  return (
    <>
      <Navbar />
      <div className="md:grid md:grid-cols-3">
        <div className=""></div>
        <div className="">
          {post!==null ? <PostLayout data={post[0]} /> :null}

          <div>
            {/* Other components or content */}
            {commentData &&
              commentData.map((comment) => (
                <Comment
                  key={comment._id}
                  userPhoto={comment.imageUrl}
                  userName={comment.author}
                  comment={comment.content}
                />
              ))}
          </div>
        </div>
        <div className=""></div>
      </div>
    </>
  );
};

export default PostComment;
