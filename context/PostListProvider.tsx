"use client";

import { LayoutProps, SinglePost } from "@/types";
import React, { createContext, useState } from "react";

interface PostListContextType {
  listOfPosts: SinglePost[] | undefined;
}

export const PostListContext = createContext<PostListContextType | undefined>(
  undefined
);

const PostListProvider = ({ children }: LayoutProps) => {
  const [listOfPosts, setListOfPosts] = useState<SinglePost[] | undefined>(
    undefined
  );

  return (
    <PostListContext.Provider value={{ listOfPosts }}>
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
