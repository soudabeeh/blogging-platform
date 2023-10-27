"use client";

import { useEffect, useState } from "react";
import ListOfPosts from "./ListOfPosts";
import { useInView } from "react-intersection-observer";
import { SinglePost } from "@/types";
import getAllPosts from "@/app/actions/getAllPosts";
import Spinner from "@/components/ui/Spinner";

const LoadMorePosts = () => {
  const [posts, setPosts] = useState<SinglePost[]>([]);
  const [page, setPage] = useState(1);

  const { ref, inView } = useInView();

  const loadMorePosts = async () => {
    const nextPage = page + 1;
    const newPosts = (await getAllPosts(nextPage)) ?? [];
    setPosts((prevPosts: SinglePost[]) => [...prevPosts, ...newPosts]);
    setPage(nextPage);
  };

  useEffect(() => {
    if (inView) {
      loadMorePosts();
    }
  }, [inView]);

  return (
    <>
      <ListOfPosts listOfPosts={posts} />
      <div ref={ref}>
        <Spinner />
      </div>
    </>
  );
};

export default LoadMorePosts;
