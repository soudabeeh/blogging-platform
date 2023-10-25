import dynamic from "next/dynamic";

const DynamicRecentPostCard = dynamic(
  () => import("../../components/bussiness/RecentPostCard")
);

const RecentPosts = () => {
  return (
    <div className='flex flex-col  gap-4 py-8'>
      <div className='flex justify-between px-4'>
        <p className='text-base font-semibold'>پست‌های اخیر</p>
        <div className='text-sm text-blue-600'>مشاهده بیشتر</div>
      </div>
      <div className='flex gap-4  overflow-scroll'>
        <DynamicRecentPostCard />
        <DynamicRecentPostCard />
        <DynamicRecentPostCard />
        <DynamicRecentPostCard />
        <DynamicRecentPostCard />
        <DynamicRecentPostCard />
        <DynamicRecentPostCard />
        <DynamicRecentPostCard />
      </div>
    </div>
  );
};

export default RecentPosts;
