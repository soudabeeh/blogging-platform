"use client";

import { LayoutProps, SinglePost } from "@/types";
import React, { createContext, useState } from "react";

interface PostListContextType {
  listOfPosts: SinglePost[] | undefined;
  updateListOfPosts: (newPosts: SinglePost[]) => void;
  setDeletedPost: (postId: string | undefined) => void;
  deletedPostId: string | undefined;
}

export const PostListContext = createContext<PostListContextType | undefined>(
  undefined
);

const PostListProvider = ({ children }: LayoutProps) => {
  const [deletedPostId, setDeletedPostId] = useState<string | undefined>(
    undefined
  );
  const [listOfPosts, setListOfPosts] = useState<SinglePost[] | undefined>(
    undefined
  );

  const updateListOfPosts = (postsList: SinglePost[]) => {
    setListOfPosts(postsList);
  };

  const setDeletedPost = (postId: string | undefined) => {
    setDeletedPostId(postId);
  };
  return (
    <PostListContext.Provider
      value={{ listOfPosts, updateListOfPosts, setDeletedPost, deletedPostId }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
