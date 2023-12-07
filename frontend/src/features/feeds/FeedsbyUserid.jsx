import React, { useEffect } from "react";
import PostLayout from "../../pages/components/PostLayout";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getFeedsAsync, postbyIdAsync, postbyuserIdAsync, selectFeeds, selectpostbyUserid, selectpostbyid } from "./feedsSlice";
import { token } from "../user/userSlice";

const FeedsbyUserid = ({userid}) => {
  const userToken = useSelector(token);
  // console.log(userToken);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(postbyuserIdAsync({token:userToken,id:userid}));
  }, [dispatch, userToken]);

  const posts = useSelector(selectpostbyUserid);
  // console.log( posts );
  return (
    <div className="grid grid-cols-1">
      {Array.isArray(posts)
        ? posts.map((post) => <PostLayout data={post} key={post._id}/>)
        : null}
    </div>
  );
};

export default FeedsbyUserid;
