"use client";

import SinglePost from "./SinglePost";

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
