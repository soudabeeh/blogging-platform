import getAllPosts from "../actions/getAllPosts";
import SinglePost from "./sections/SinglePost";
import CreateNewPost from "./sections/CreateNewPost";
import getSinglePost from "../actions/getSinglePost";
import ListOfPosts from "./sections/ListOfPosts";
import { Suspense } from "react";
import LoadMorePosts from "./sections/LoadMorePosts";

const Post = async () => {
  const listOfPosts = await getAllPosts(1);
  console.log("listOfPosts______", listOfPosts);
  const single = await getSinglePost("1");
  // console.log("single", single);
  return (
    <>
      <div className='p-4 flex flex-col bg-gray-100 h-screen overflow-auto'>
        <div className='w-1/2 bg-white rounded-lg mx-auto p-4'>
          <div className='flex justify-between items-center mt-6'>
            <div className='text-base font-semibold'>لیست پست ها</div>
            <CreateNewPost />
          </div>
          <div className='mt-4 grid grid-cols-2 gap-4 cursor-pointer'>
            <ListOfPosts listOfPosts={listOfPosts} />
            <LoadMorePosts />
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
