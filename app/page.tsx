"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";

const DynamicBanner = dynamic(() => import("./sections/Banner"));
const DynamicPost = dynamic(() => import("./sections/CreatePost"));
const DynamicRecentPost = dynamic(() => import("./sections/RecentPosts"));

export default function Home() {
  const inputRef = useRef<any>();

  return (
    <div className='bg-whitem-auto'>
      <DynamicBanner />
      <div className='flex flex-col gap-21 px-16  m-auto  max-w-8xl '>
        <DynamicPost />
        <DynamicRecentPost />
      </div>
    </div>
  );
}
