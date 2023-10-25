"use client";


import dynamic from "next/dynamic";
import Image from "next/image";
import PostImg from "@/public/assets/images/singlePost.png";
import useModal from "@/hooks/use-modal";

const DynamicButton = dynamic(() => import("@/components/ui/Button/Button"));
const DynamicInputFile = dynamic(
  () => import("@/components/ui/InputFileWrapper")
);


const DynamicListOfPostsModals = dynamic(() => import("@/modules/post/sections/ListOfPostsModals"));




const Post = () => {
  const { modalProps, handelOpen: showModal } = useModal();
  const { modalProps: detailModalProps, handelOpen: showDetailModal } =
    useModal();
  return (
    <div className='p-4 flex flex-col bg-gray-100 '>
      <div className="w-5/6 bg-white rounded-lg m-auto p-4">
      <div className='flex justify-between items-center mt-6'>
        <div className='text-base font-semibold'>پست‌های من</div>
        <DynamicInputFile onSelectFile={() => console.log("onSelectFile")}>
          <DynamicButton>افزودن پست</DynamicButton>
        </DynamicInputFile>
      </div>
      <div className='mt-4 grid grid-cols-4 gap-4 cursor-pointer'>
        {Array.from(Array(10), (_, index) => {
          return (
            <div key={`key-${index}`} onClick={showModal} className="m-auto col-span-1 w-full" >
              <Image src={PostImg} alt='Picture of the post' className="w-full" />
            </div>
          );
        })}
      </div>

     <DynamicListOfPostsModals modalProps={modalProps}  detailModalProps={detailModalProps} showDetailModal={showDetailModal}/>
        </div>
    </div>
  );
};

export default Post;
