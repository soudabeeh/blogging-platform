"use client";

import SinglePost from "./SinglePost";

type SinglePostProp = {
  listOfPosts: SinglePost[] | undefined;
};

const ListOfPosts = ({ listOfPosts }: SinglePostProp) => {
  // const listOfPosts = await promise;

  return (
    <>
      {listOfPosts?.map((post, index) => {
        return <SinglePost key={`key-${index}`} post={post} />;
      })}
    </>
  );
};

export default ListOfPosts;
