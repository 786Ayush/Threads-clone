import React, { useEffect } from "react";
import PostLayout from "../../pages/components/PostLayout";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getFeedsAsync, selectFeeds } from "./feedsSlice";
import { token } from "../user/userSlice";

const Feeds = () => {
  const textPost = {
    firstName: "Ayush Gupta",
    icon: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d364921d-105f-4998-a93f-b7aeb2ca8e68/df88ssd-1bdcaeb2-0202-4f7c-9b07-0cdebb64cc90.jpg/v1/fill/w_894,h_894,q_70,strp/zoro_icon_by_lucaesposito06_df88ssd-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYzMiIsInBhdGgiOiJcL2ZcL2QzNjQ5MjFkLTEwNWYtNDk5OC1hOTNmLWI3YWViMmNhOGU2OFwvZGY4OHNzZC0xYmRjYWViMi0wMjAyLTRmN2MtOWIwNy0wY2RlYmI2NGNjOTAuanBnIiwid2lkdGgiOiI8PTE2MzIifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.WFpjXupIOFWcCHxMEDSD8UHFMrmZJcP2MS5x6IbKxAM",
    content: "This is a text post.",
    contentType: "text",
    replies: 4,
    likes: 5,
  };

  const photoPost = {
    firstName: "Ayush Gupta",
    icon: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d364921d-105f-4998-a93f-b7aeb2ca8e68/df88ssd-1bdcaeb2-0202-4f7c-9b07-0cdebb64cc90.jpg/v1/fill/w_894,h_894,q_70,strp/zoro_icon_by_lucaesposito06_df88ssd-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYzMiIsInBhdGgiOiJcL2ZcL2QzNjQ5MjFkLTEwNWYtNDk5OC1hOTNmLWI3YWViMmNhOGU2OFwvZGY4OHNzZC0xYmRjYWViMi0wMjAyLTRmN2MtOWIwNy0wY2RlYmI2NGNjOTAuanBnIiwid2lkdGgiOiI8PTE2MzIifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.WFpjXupIOFWcCHxMEDSD8UHFMrmZJcP2MS5x6IbKxAM",
    content:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d364921d-105f-4998-a93f-b7aeb2ca8e68/df88ssd-1bdcaeb2-0202-4f7c-9b07-0cdebb64cc90.jpg/v1/fill/w_894,h_894,q_70,strp/zoro_icon_by_lucaesposito06_df88ssd-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYzMiIsInBhdGgiOiJcL2ZcL2QzNjQ5MjFkLTEwNWYtNDk5OC1hOTNmLWI3YWViMmNhOGU2OFwvZGY4OHNzZC0xYmRjYWViMi0wMjAyLTRmN2MtOWIwNy0wY2RlYmI2NGNjOTAuanBnIiwid2lkdGgiOiI8PTE2MzIifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.WFpjXupIOFWcCHxMEDSD8UHFMrmZJcP2MS5x6IbKxAM",
    contentType: "photo",
    replies: 4,
    likes: 5,
  };

  const videoPost = {
    firstName: "Ayush Gupta",
    icon: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d364921d-105f-4998-a93f-b7aeb2ca8e68/df88ssd-1bdcaeb2-0202-4f7c-9b07-0cdebb64cc90.jpg/v1/fill/w_894,h_894,q_70,strp/zoro_icon_by_lucaesposito06_df88ssd-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYzMiIsInBhdGgiOiJcL2ZcL2QzNjQ5MjFkLTEwNWYtNDk5OC1hOTNmLWI3YWViMmNhOGU2OFwvZGY4OHNzZC0xYmRjYWViMi0wMjAyLTRmN2MtOWIwNy0wY2RlYmI2NGNjOTAuanBnIiwid2lkdGgiOiI8PTE2MzIifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.WFpjXupIOFWcCHxMEDSD8UHFMrmZJcP2MS5x6IbKxAM",
    content: "https://www.youtube.com/shorts/D3BtA7hol6I?feature=share",
    contentType: "video",
    replies: 4,
    likes: 5,
  };

  const userToken = useSelector(token);
  console.log(userToken);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFeedsAsync(userToken));
  }, [dispatch, userToken]);

  const posts = useSelector(selectFeeds);
  console.log({ posts });
  return (
    <div className="grid grid-cols-1">
      {/* <Link to="/post/id:">
        <PostLayout data={textPost} />
      </Link>
      <PostLayout data={photoPost} />
      <PostLayout data={videoPost} /> */}
      {Array.isArray(posts)?
        posts.map((post) => (
          <Link to={`/post/${post._id}`} key={post._id}>
            <PostLayout data={post} />
          </Link>
          
        )):null}
    </div>
  );
};

export default Feeds;
