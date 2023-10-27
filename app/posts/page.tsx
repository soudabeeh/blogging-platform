import getAllPosts from "../actions/getAllPosts";
import CreateNewPost from "./sections/CreateNewPost";
import ListOfPosts from "./sections/ListOfPosts";
import LoadMorePosts from "./sections/LoadMorePosts";

const Post = async () => {
  const listOfPosts = await getAllPosts(1);
  console.log("listOfPosts______", listOfPosts);

  return (
    <>
      <div className='p-4 flex flex-col bg-gray-100 h-screen overflow-auto'>
        <div className='w-full bg-gray-100 rounded-lg mx-auto xl:w-1/2 xl:bg-white xl:p-4'>
          <div className='flex justify-between items-center mt-6'>
            <div className='text-base font-semibold'>لیست پست ها</div>
            <CreateNewPost />
          </div>
          <div className='mt-4 grid grid-cols-1 gap-4 cursor-pointer xl:grid-cols-2'>
            <ListOfPosts listOfPosts={listOfPosts} />
            <LoadMorePosts />
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
