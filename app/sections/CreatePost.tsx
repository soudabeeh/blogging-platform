"use client";

import { COMMON_LINKS } from "@/constants/enums";
import createPostImg from "@/public/assets/images/createPostImg.svg";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";

const DynamicCreatePostCard = dynamic(
  () => import("../../components/bussiness/CreatePostCard")
);
const DynamicButton = dynamic(() => import("@/components/ui/Button/Button"));

const CreatePost = () => {
  const router = useRouter();

  return (
    <div className='bg-white grid grid-cols-2   gap-21'>
      <div className='pr-4 flex flex-col justify-center w-5/6'>
        <div>icon</div>
        <div className=' mt-6'>
          <h1 className='text-3xl font-semibold'>لحظه‌ها رو به اشتراک بگذار</h1>
          <p className='mt-4 text-gray-500 leading-8'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون.
          </p>
        </div>
        <ul className='my-8'>
          <DynamicCreatePostCard />
          <DynamicCreatePostCard />
          <DynamicCreatePostCard />
        </ul>

        <div className='flex gap-3'>
          <DynamicButton variant='primary' className="w-[200px]" isLinked href={COMMON_LINKS.POSTS}>پست ها</DynamicButton>

        </div>
      </div>

      <div className='col-span-1 w-full h-auto flex justify-center'>
        <Image src={createPostImg} alt='Picture of the author' />
      </div>
    </div>
  );
};

export default CreatePost;
