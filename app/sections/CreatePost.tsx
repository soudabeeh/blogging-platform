"use client";

import createPostImg from "@/public/assets/images/createPostImg.svg";
import Image from "next/image";

const CreatePost = () => {
  return (
    <div className='bg-white grid grid-cols-2   gap-21'>
      <div className='pr-4 flex flex-col justify-center w-5/6'>
        <div className=' mt-6'>
          <h1 className='text-3xl font-semibold'>لحظه‌ها رو به اشتراک بگذار</h1>
          <p className='mt-4 text-gray-500 leading-8'>لو</p>
        </div>
      </div>

      <div className='col-span-1 w-full h-auto flex justify-center'>
        <Image src={createPostImg} alt='Picture of the author' />
      </div>
    </div>
  );
};

export default CreatePost;
