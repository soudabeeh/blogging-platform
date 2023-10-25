"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import LandingImg from "@/public/assets/images/landingBanner.svg";
import { COMMON_LINKS } from "@/constants/enums";

const DynamicButton = dynamic(() => import("@/components/ui/Button/Button"));

const Banner = () => {
  return (
    <div className='grid grid-cols-2 bg-blue_gray-50 mb-21'>
      <div className='pr-16 col-span-1 flex items-center'>
        <div className='flex flex-col justify-center items-start w-5/6'>
          <h1 className='text-3xl font-semibold'>Modern Bloging platform</h1>
            <div className="mt-4">
            <DynamicButton variant='primary' className="w-[200px]" isLinked href={COMMON_LINKS.POSTS}>پست ها</DynamicButton>
            </div>
        </div>
      </div>
      <div className='col-span-1 w-full h-auto flex justify-end '>
        <Image
          src={LandingImg}
          alt='Picture of the author'
          priority={true}
          width={800}
          height={512}
        />
      </div>
    </div>
  );
};

export default Banner;
