import getAllPosts from "../actions/getAllPosts";
import SinglePost from "./sections/SinglePost";
import CreateNewPost from "./sections/CreateNewPost";
import getSinglePost from "../actions/getSinglePost";

const Post = async () => {
  const listOfPosts = await getAllPosts();
  console.log("listOfPosts", listOfPosts);
  const single = await getSinglePost("1");
  console.log("single", single);
  return (
    <div className='p-4 flex flex-col bg-gray-100 h-screen overflow-auto'>
      <div className='w-1/2 bg-white rounded-lg mx-auto p-4'>
        <div className='flex justify-between items-center mt-6'>
          <div className='text-base font-semibold'>لیست پست ها</div>
          <CreateNewPost />
        </div>
        <div className='mt-4 grid grid-cols-2 gap-4 cursor-pointer'>
          {listOfPosts?.map((post, index) => {
            return <SinglePost key={`key-${index}`} post={post} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Post;
