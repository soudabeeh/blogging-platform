import getAllPosts from "../actions/getAllPosts";
import SinglePost from "./sections/SinglePost";
import CreateNewPost from "./sections/CreateNewPost";
import getSinglePost from "../actions/getSinglePost";
import Loader from "@/components/ui/Loader";
import PostListProvider from "@/context/PostListProvider";
import ListOfPosts from "./sections/ListOfPosts";
import { Suspense } from "react";

const Post = async () => {
  const listOfPosts = getAllPosts();
  console.log("listOfPosts", listOfPosts);
  const single = await getSinglePost("1");
  // console.log("single", single);
  return (
    <PostListProvider>
      <div className='p-4 flex flex-col bg-gray-100 h-screen overflow-auto'>
        <div className='w-1/2 bg-white rounded-lg mx-auto p-4'>
          <div className='flex justify-between items-center mt-6'>
            <div className='text-base font-semibold'>لیست پست ها</div>
            <CreateNewPost />
          </div>
          <div className='mt-4 grid grid-cols-2 gap-4 cursor-pointer'>
            <Suspense fallback={<p>Loading...</p>}>
              <ListOfPosts promise={listOfPosts} />
            </Suspense>
          </div>
        </div>
      </div>
    </PostListProvider>
  );
};

export default Post;
