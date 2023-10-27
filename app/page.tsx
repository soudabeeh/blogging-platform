"use client";

import dynamic from "next/dynamic";

const DynamicBanner = dynamic(() => import("./sections/Banner"));
const DynamicPost = dynamic(() => import("./sections/CreatePost"));

export default function Home() {
  return (
    <div className='bg-whitem-auto'>
      <DynamicBanner />
      <div className='flex flex-col gap-21 px-16  m-auto  max-w-8xl '>
        <DynamicPost />
      </div>
    </div>
  );
}
