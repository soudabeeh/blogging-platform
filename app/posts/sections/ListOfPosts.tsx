"use client";

import { useContext, useEffect, useState } from "react";
import SinglePost from "./SinglePost";
import { PostListContext } from "@/context/PostListProvider";
import getAllPosts from "@/app/actions/getAllPosts";

type SinglePostProp = {
  promise: Promise<SinglePost[] | undefined>;
};

const ListOfPosts = async ({ promise }: SinglePostProp) => {
  const listOfPosts = await promise;
  return (
    <>
      {listOfPosts?.map((post, index) => {
        return <SinglePost key={`key-${index}`} post={post} />;
      })}
    </>
  );
};

export default ListOfPosts;
