"use client";

import { useState } from "react";
import SinglePost from "./SinglePost";

type SinglePostProp = {
  listOfPosts: SinglePost[] | undefined;
};

const ListOfPosts = ({ listOfPosts }: SinglePostProp) => {
  const [prePosts, setPrevPosts] = useState(listOfPosts);

  if (listOfPosts !== prePosts) {
    //check here
  }
  return (
    <>
      {listOfPosts?.map((post, index) => {
        return <SinglePost key={`key-${index}`} post={post} />;
      })}
    </>
  );
};

export default ListOfPosts;
